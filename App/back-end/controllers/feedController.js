const User = require('../models/User');
const HomeFeed = require('../models/HomeFeed');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const allPosts = async (req, res) => {
    try {
      const { userId } = req.body;
    //   console.log(userId);
  
      const user = await User.findOne({ _id: userId }).select('-email -password');
      if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
      }
  
      const posts = await HomeFeed.find({})
        .populate('user', '-_id -__v -password -email');
  
      const enrichedPosts = posts.map((post) => {
        const hasUserLikedThis = post.likes.includes(user);
        const hasUserDislikedThis = post.dislikes.includes(user);
  
        post.hasUserLikedThis = hasUserLikedThis;
        post.hasUserDislikedThis = hasUserDislikedThis;
  
        return post;
      });
  
      await Promise.all(enrichedPosts.map((post) => post.save())); // Save the updated posts
  
      const reversedPosts = enrichedPosts.reverse();
      res.status(StatusCodes.OK).json({ count: reversedPosts.length, feed: reversedPosts });
    } catch (error) {
      // Handle any errors that occur during the operation
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
};  
  
const clearFeed = async (req, res) => {
    try {
        await HomeFeed.deleteMany();
        res.status(StatusCodes.OK).json({ msg: 'Feed has been cleared'});
    } catch (error) {
        throw new CustomError.InternalServerError('Error deleting feed posts');
    }
}

const userPost = async (req, res) => {
    const { userId, title, message } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    if(!message){
        throw new CustomError.BadRequestError('Provide message');
    }

    const user = await User.findOne({ _id: userId }).select('-email -password');
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }

    const post = await HomeFeed.create({ user, title, message });

    res.status(StatusCodes.CREATED).json({ post });
}

const likePost = async (req, res) => {
    const { userId, postId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    if(!postId){
        throw new CustomError.BadRequestError('Provide postId');
    }

    const user = await User.findOne({ _id: userId }).select('-email -password');
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }

    const post = await HomeFeed.findOne({ _id: postId });
    if (!post) {
        throw new CustomError.BadRequestError(`User post: ${postId} does not exist.`);
    }

    // See if the userId is already apart of the likes array
    const alreadyLiked = await post.likes.includes(userId);
    if (alreadyLiked) {
        throw new CustomError.BadRequestError('You have already liked this post.');
    }

    // Add the user's like to the post
    post.likes.push(user);
    await post.save();

    res.status(StatusCodes.OK).json({msg: `You've successfully liked this user post: ${postId}`});
}

const repliesPost = async (req, res) => {
    const { userId, postId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    if(!postId){
        throw new CustomError.BadRequestError('Provide postId');
    }

    const user = await User.findOne({ _id: userId }).select('-email -password');
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }

    const post = await HomeFeed.findOne({ _id: postId });
    if (!post) {
        throw new CustomError.BadRequestError(`User post: ${postId} does not exist.`);
    }

    // See if the userId is already apart of the likes array
    const alreadyLiked = await post.replies.includes(userId);
    if (alreadyLiked) {
        throw new CustomError.BadRequestError('You have already liked this post.');
    }

    // Add the user's like to the post
    post.replies.push(user);
    await post.save();

    res.status(StatusCodes.OK).json({msg: `You've successfully replied to this user post: ${postId}`});
}

module.exports = {
    allPosts,
    clearFeed,
    userPost,
    likePost
}