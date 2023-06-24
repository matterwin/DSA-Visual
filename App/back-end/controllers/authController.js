const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const register = async (req,res) => {
    const { username, email, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists)
        throw new CustomError.BadRequestError('Email already exists');

    const user = await User.create({ username, email, password });

    res.status(StatusCodes.CREATED).json({ user });
}

const login = async (req,res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email });

    res.status(200).json({ user });
}

module.exports = {
    register,
    login
}