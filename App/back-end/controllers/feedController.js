const User = require('../models/User');
const HomeFeed = require('../models/HomeFeed');
const UserInfo = require('../models/UserInfo');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const allPosts = async (req, res) => {
    try {
        const { userId } = req.body;

        const posts = await HomeFeed.find({})
        .populate('user', '-_id -__v -password -email');

        const reversedPosts = posts.reverse();
        res.status(StatusCodes.OK).json({ count: reversedPosts.length, feed: reversedPosts });

    } catch (error) {
        // Handle any errors that occur during the operation
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
        });
    }
};
  
// maybe pagination for a handful of posts, and for each handful check if the user has liked the post already
  
const clearFeed = async (req, res) => {
    try {
        await HomeFeed.deleteMany();
        res.status(StatusCodes.OK).json({ msg: 'Feed has been cleared'});
    } catch (error) {
        throw new CustomError.InternalServerError('Error deleting feed posts');
    }
};

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
};

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

    // add the post to the user's liked list
    const userListOfStuff = await UserInfo.findOne({ user: userId });
    userListOfStuff.likes.push(post);
    await userListOfStuff.save();

    // Add the user's like to the post
    post.likes.push(user);
    await post.save();

    res.status(StatusCodes.OK).json({msg: `You've successfully liked this user post: ${postId}`});
};

const userInfo = async (req, res) => {
    const { userId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    const user = await User.findOne({ _id: userId });
    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }

    const likedPosts = await UserInfo
    .find({ user: user })
    .populate('user', '-_id -__v -password -email');

    res.status(StatusCodes.OK).json({ likedPosts })
};

module.exports = {
    allPosts,
    clearFeed,
    userPost,
    likePost,
    userInfo
}