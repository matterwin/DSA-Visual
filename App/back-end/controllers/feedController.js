const User = require('../models/User');
const HomeFeed = require('../models/HomeFeed');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const getAllPosts = async (req,res) => {
    res.send('good');
}

module.exports = {
    getAllPosts
}