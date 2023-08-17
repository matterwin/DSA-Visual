const mongoose = require('mongoose');

const RepliesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  userPost: {
    type: mongoose.Schema.ObjectId,
    ref: 'HomeFeed',
    required: true,
  },
  message: {
    type: String,
    minlength: 1,
    maxlength: 400,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Replies', RepliesSchema);