const User = require('../models/User');
const HomeFeed = require('../models/HomeFeed');
const UserInfo = require('../models/UserInfo');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const moment = require('moment-timezone');

const allPosts = async (req, res) => {
    try {
      const { userId } = req.body;
      const { page } = req.query;
      const limit = 3;

      console.log(page);
  
      const totalCount = await HomeFeed.countDocuments({}); // Get total count of documents
      const totalPages = Math.ceil(totalCount / limit); // Calculate total number of pages
  
      let skip = (page - 1) * limit;
  
      // Calculate the skip value for fetching all previous pages
      if (page > 1) {
        skip = (page - 1) * limit + limit * (page - 2);
      }
  
      const posts = await HomeFeed.find({})
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }) // Sort in descending order by createdAt
        .populate('user', '-_id -__v -password -email');
  

      const formattedPosts = posts.map((post) => {
        const createdAt = moment(post.createdAt);
        const currentTimestamp = moment();
        const duration = moment.duration(currentTimestamp.diff(createdAt));
  
        let formattedDate = '';
        if (duration.asSeconds() < 60) {
          formattedDate = `${Math.floor(duration.asSeconds())}s`;
        } else if (duration.asMinutes() < 60) {
          formattedDate = `${Math.floor(duration.asMinutes())}m`;
        } else if (duration.asHours() < 24) {
          formattedDate = `${Math.floor(duration.asHours())}hr`;
        } else if (duration.asDays() < 30) {
          formattedDate = `${Math.floor(duration.asDays())}d`;
        } else if (duration.asMonths() < 12) {
          formattedDate = `${Math.floor(duration.asMonths())}mon`;
        } else {
          formattedDate = `${Math.floor(duration.asYears())}yr`;
        }
  
        return {
          ...post.toObject(),
          createdAt: formattedDate,
        };
      });
    
      res.status(StatusCodes.OK).json({
        count: formattedPosts.length,
        totalPages: totalPages,
        currentPage: page,
        feed: formattedPosts,
      });

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

    const alreadyDisliked = await post.dislikes.includes(userId);
    if (alreadyDisliked) {
      // Remove user from post.likes
      const userIndex = post.dislikes.indexOf(userId);
      post.dislikes.splice(userIndex, 1);

      const userIndexForUserInfo = userListOfStuff.dislikes.indexOf(userId);
      userListOfStuff.dislikes.splice(userIndexForUserInfo, 1);
    }

    // Save new userInfo list
    await userListOfStuff.save();

    // Add the user's like to the post
    post.likes.push(user);
    await post.save();

    res.status(StatusCodes.OK).json({msg: `You've successfully liked this user post: ${postId}`});
};

const dislikePost = async (req, res) => {
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

  const alreadyDisliked = await post.dislikes.includes(userId);
  if (alreadyDisliked) {
    throw new CustomError.BadRequestError('You have already disliked this post.');
  }

  // add the post to the user's disliked list
  const userListOfStuff = await UserInfo.findOne({ user: userId });
  userListOfStuff.dislikes.push(post);

  // See if the userId is already apart of the likes array
  const alreadyLiked = await post.likes.includes(userId);
  if (alreadyLiked) {
    // Remove user from post.likes
    const userIndex = post.likes.indexOf(userId);
    post.likes.splice(userIndex, 1);
    
    const userIndexForUserInfo = userListOfStuff.likes.indexOf(userId);
    userListOfStuff.likes.splice(userIndexForUserInfo, 1);
  }
  
  // Save new userInfo list
  await userListOfStuff.save();

  // Add the user's like to the post
  post.dislikes.push(user);
  await post.save();

  res.status(StatusCodes.OK).json({msg: `You've successfully disliked this user post: ${postId} ... hater`});
};

const userInfo = async (req, res) => {
    const { userId } = req.body;
  
    if (!userId) {
      throw new CustomError.BadRequestError('Provide userId');
    }
  
    const user = await User.findOne({ _id: userId });
    if (!user) {
      throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
  
    const userInfo = await UserInfo.findOne({ user })
      .populate('user', '-_id -__v -password -email')
      .populate('posts')
      .populate('likes')
      .populate('dislikes')
      .populate('replies');
  
    const { posts, likes, dislikes, replies } = userInfo;
  
    const numberOf = {
      posts: posts.length,
      likes: likes.length,
      dislikes: dislikes.length,
      replies: replies.length,
    };
  
    res.status(StatusCodes.OK).json({
      userInfo: { ...userInfo.toObject(), numberOf },
    });
};
  
module.exports = {
    allPosts,
    clearFeed,
    userPost,
    likePost,
    dislikePost,
    userInfo
}