const path = require('path');
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadProfileImage = async (req, res) => {
  console.log(req.body);
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.CREATED).json({ image: { src: result.secure_url } });
};

const changeProfileImage = async (req, res) => {
  const { userId } = req.params;
  console.log(req.params);
  console.log("changeProfileImage called");

  if (!userId)
    throw new CustomError.BadRequestError('Provide userId');

  const user = await User.findOne({ _id: userId });
  if (!user)
    throw new CustomError.BadRequestError('userId is invalid');

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);

  user.profilePic = result.secure_url; // Update the profilePic field with the new image URL
  await user.save(); // Save the updated user object

  return res.status(StatusCodes.CREATED).json({ msg: 'Profile picture changed successfully' });
};

  
module.exports = {
  uploadProfileImage,
  changeProfileImage
};