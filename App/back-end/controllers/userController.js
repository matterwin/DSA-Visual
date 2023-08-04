const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

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
    const firstname = user.firstname;
    const lastname = user.lastname;
    const bio = user.bio;
    res.status(StatusCodes.OK).json({ msg: 'success', username, color, firstname, lastname, bio });
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
    .populate('user', '-_id -__v -password -email')
    .populate('likes')

    const { likes } = userInfo;
  
    const numberOf = { likes: likes.length };
  
    res.status(StatusCodes.OK).json({
      userInfo: { numberOf, likes },
    });
}

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
      userInfo: { numberOf },
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
    dislikes,
    posts,
    numberOf,
}