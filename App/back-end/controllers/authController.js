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
    const color = user.color;
    res.status(StatusCodes.OK).json({ msg: 'success', username, color });
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

const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    let isValidColor = false;
  
    while (!isValidColor) {
      color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
  
      // Check if the generated color is within the allowed range
      const parsedColor = parseInt(color.substring(1), 16);
      const isExcludedColor =
        parsedColor <= 0x7F7F7F || // Black
        (parsedColor >= 0x8B4513 && parsedColor <= 0xA52A2A); // Brown and Dark Red
  
      isValidColor = !isExcludedColor;
    }
  
    return color;
  };
  

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

    const color = generateRandomColor(); // Generate random hex color

    const user = await User.create({ username, email, password, color });
    const cookie = user._id;
    const name = user.username;
    const profilePic = user.profilePic;
    res.status(StatusCodes.CREATED).json({ cookie, name, profilePic });
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
    const profilePic = user.profilePic;
    res.status(StatusCodes.OK).json({ cookie, name, profilePic });
}

const deleteAllUserAccounts = async (req, res) => {
    try {
      await User.deleteMany();
      res.status(StatusCodes.OK).json({ msg: 'All user accounts deleted' });
    } catch (error) {
      throw new CustomError.InternalServerError('Error deleting user accounts');
    }
};

module.exports = {
    basicUserInfo,
    checkEmail,
    register,
    login,
    deleteAllUserAccounts
}