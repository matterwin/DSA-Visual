const User = require('../models/User');
const HomeFeed = require('../models/HomeFeed');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const allPosts = async (req,res) => {
    try {
        const posts = await HomeFeed.find({}).populate('user', '-_id -__v -password -email')
        res.status(StatusCodes.OK).json({ count: posts.length, feed: posts });
    } catch (error) {
        // Handle any errors that occur during the operation
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
        });
    }
}

const clearFeed = async (req,res) => {
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

module.exports = {
    allPosts,
    clearFeed,
    userPost,
}