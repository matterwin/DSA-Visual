const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  posts:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'HomeFeed',
    },
  ],
  likes:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'HomeFeed',
    },
  ],
  dislikes:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'HomeFeed',
    },
  ],
  replies:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'HomeFeed',
    },
  ],
});

module.exports = mongoose.model('UserInfo', UserInfoSchema);
