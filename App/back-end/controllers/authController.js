const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

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
    res.status(StatusCodes.OK).json({ msg: 'success', username });
}

const checkEmail = async (req,res) => {
    const { email } = req.body;

    if(!email){
        throw new CustomError.BadRequestError('Provide email');
    }

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists){
        throw new CustomError.BadRequestError('Email already exists');
    }

    res.status(StatusCodes.OK).json({ msg: 'Email is available to use' });
}

const register = async (req,res) => {
    const { username, email, password } = req.body;
    console.log(req.body);

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists){
        throw new CustomError.BadRequestError('Email already exists');
    }

    const usernameAlreadyExists = await User.findOne({ username });
    if (usernameAlreadyExists){
        throw new CustomError.BadRequestError('Username already exists');
    }

    if(!username || !email || !password){
        throw new CustomError.BadRequestError('Provide all auth values');
    }

    const user = await User.create({ username, email, password });
    const cookie = user._id;
    const name = user.username;
    res.status(StatusCodes.CREATED).json({ cookie, name });
}

const login = async (req,res) => {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
        throw new CustomError.BadRequestError('Please provide email and password');
    }
    const user = await User.findOne({ email });

    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    
    const cookie = user._id;
    const name = user.username;
    res.status(StatusCodes.OK).json({ cookie, name });
}

module.exports = {
    basicUserInfo,
    checkEmail,
    register,
    login
}