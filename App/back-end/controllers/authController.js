const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

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

    res.status(StatusCodes.CREATED).json({ user });
}

const login = async (req,res) => {
    const { email, password} = req.body;
    console.log(req.body);

    const user = await User.findOne({ email });

    res.status(200).json({ user });
}

module.exports = {
    checkEmail,
    register,
    login
}