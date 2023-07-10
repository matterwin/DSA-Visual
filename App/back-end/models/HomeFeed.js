const mongoose = require('mongoose');

const HomeFeedSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title:{
    type:String,
    minlength: 1,
    maxlength: 20
  },
  message: {
    type: String,
    minlength: 1,
    maxlength: 400,
    required: true,
  },
  likes:{
    type: Number,
    default:0
  },
  replies:{
    type: Number,
    default:0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('HomeFeed', HomeFeedSchema);
