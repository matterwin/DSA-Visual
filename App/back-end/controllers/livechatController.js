const User = require('../models/User');
const LiveChat = require('../models/LiveChat');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const seeLiveChat = async (req, res) => {
    try {
      const chat = await LiveChat.find({}).populate('user', '-_id -__v -password -email')
      return res.status(StatusCodes.OK).json({ count: chat.length, chat });
    } catch (error) {
      // Handle any errors that occur during the operation
      console.error(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'Internal Server Error',
      });
    }
  };
  

const clearChat = async (req,res) => {
    try {
        await LiveChat.deleteMany();
        res.status(StatusCodes.OK).json({ msg: 'Chat has been cleared'});
    } catch (error) {
        throw new CustomError.InternalServerError('Error deleting chat messages');
    }
}

const postComment = async (req,res) => {
    // will need to send a cookie back to backend, so like send a validate a JWT
    const { userId, message } = req.body;
    
    if(!userId || !message)
        throw new CustomError.BadRequestError('Provide all chat values');

    const user = await User.findOne({ _id: userId }).select('-email -password');
    if(!user)
        throw new CustomError.UnauthenticatedError('Invalid Credentials');

    const newMessage = await LiveChat.create({ user, message })

    return res.status(StatusCodes.CREATED).send({ newMessage });
}

module.exports = {
    seeLiveChat,
    clearChat,
    postComment
};