const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const moment = require('moment-timezone');
const HomeFeed = require('../models/HomeFeed');

const allUserInfo = async (req, res) => {
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

const basicUserInfo = async(req, res) => {
    const { userId } = req.body;
    console.log(req.body);

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    const user = await User.findOne({ _id: userId });
    if (!user){
        throw new CustomError.BadRequestError('userId is invalid');
    }
    
    const username = user.username;
    const color = user.color;
    const profPic = user.profilePic
    const firstname = user.firstname;
    const lastname = user.lastname;
    const bio = user.bio;
    res.status(StatusCodes.OK).json({ msg: 'success', username, profPic, color, firstname, lastname, bio });
}

const likes = async (req, res) => {
    const { userId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    const user = await User.findOne({ _id: userId });
    if (!user){
        throw new CustomError.BadRequestError('userId is invalid');
    }

    const userInfo = await UserInfo.findOne({ user })
      .populate('likes')

    const { likes } = userInfo;

    // Reverse the likes array
    const reversedLikes = likes.reverse();
  
    const numberOf = { likes: reversedLikes.length };

    res.status(StatusCodes.OK).json({
        userInfo: { numberOf, likes: reversedLikes },
    });
}

const listOfLikedPosts = async (req, res) => {
  const { userId } = req.query;
  const { page } = req.query;
  const limit = 5;

  if (!userId) {
      throw new CustomError.BadRequestError('Provide userId');
  }

  const user = await User.findOne({ _id: userId });
  if (!user) {
      throw new CustomError.BadRequestError('userId is invalid');
  }

  const userInfo = await UserInfo.findOne({ user })
  .populate({
    path: 'likes',
    populate: {
      path: 'user',
      select: 'username firstname lastname profilePic color'
    }
  })

  const { likes } = userInfo;

  // Reverse the likes array
  const reversedLikes = likes.reverse();

  const totalCount = reversedLikes.length;
  const totalPages = Math.ceil(totalCount / limit);

  let skip = (page - 1) * limit;

  // Calculate the skip value for fetching all previous pages
  if (page > 1) {
      skip = (page - 1) * limit + limit * (page - 2);
  }

  const paginatedLikes = reversedLikes.slice(skip, skip + limit).map((post) => {
    const alreadyDisliked = post.dislikes.includes(userId);
    const alreadyLiked = post.likes.includes(userId);

    const createdAt = moment(post.createdAt);
    const formattedCreatedAt = createdAt.format("DD MMM YYYY"); // Format the createdAt date

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
      createdAt: formattedCreatedAt, // Use the formatted date
      postedAgo: formattedDate,
      likeToDislikeCount: post.likeToDislikeRatio,
      hasDisliked: alreadyDisliked,
      hasLiked: alreadyLiked,
    };
  });

  const numberOf = { likes: paginatedLikes.length };

  res.status(StatusCodes.OK).json({
    totalPages: totalPages,
    currentPage: page,
    numberOf,
    likes: paginatedLikes,
  });
};

const numberOf = async (req, res) => {
    const { userId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    const user = await User.findOne({ _id: userId });
    if (!user){
        throw new CustomError.BadRequestError('userId is invalid');
    }

    const userInfo = await UserInfo.findOne({ user })
    .populate('user', '-_id -__v -password -email')

    const { posts, likes, dislikes, replies } = userInfo;
  
    const numberOf = {
      posts: posts.length,
      likes: likes.length,
      dislikes: dislikes.length,
      replies: replies.length,
    };
  
    res.status(StatusCodes.OK).json({
      numberOf: numberOf
    });
}

const dislikes = async (req, res) => {
    const { userId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    const user = await User.findOne({ _id: userId });
    if (!user){
        throw new CustomError.BadRequestError('userId is invalid');
    }

    const userInfo = await UserInfo.findOne({ user })
    .populate('user', '-_id -__v -password -email')
    .populate('dislikes')

    const { dislikes } = userInfo;
  
    const numberOf = { dislikes: dislikes.length };
  
    res.status(StatusCodes.OK).json({
      userInfo: { numberOf, dislikes },
    });
}

const posts = async (req, res) => {
    const { userId } = req.body;

    if(!userId){
        throw new CustomError.BadRequestError('Provide userId');
    }

    const user = await User.findOne({ _id: userId });
    if (!user){
        throw new CustomError.BadRequestError('userId is invalid');
    }

    const userInfo = await UserInfo.findOne({ user })
    .populate('user', '-_id -__v -password -email')
    .populate('posts')

    const { posts } = userInfo;
  
    const numberOf = { posts: posts.length };
  
    res.status(StatusCodes.OK).json({
      userInfo: { numberOf, posts },
    });
}

module.exports = {
  allUserInfo,
  basicUserInfo,
  likes,
  listOfLikedPosts,
  dislikes,
  posts,
  numberOf,
}