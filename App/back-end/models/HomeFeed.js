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
  likes:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  dislikes:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  replies:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  ],
  hasUserLikedThis:{
    type:Boolean,
    default: false
  },
  hasUserDislikedThis:{
    type:Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('HomeFeed', HomeFeedSchema);
