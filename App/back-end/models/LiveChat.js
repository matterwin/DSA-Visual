const mongoose = require('mongoose');

const LiveChatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    expires: '24h', // Setting the TTL index to automatically delete documents after 24 hours
  },
});

// Pre-save hook to set the deletedAt time after 24 hours
LiveChatSchema.pre('save', function (next) {
  // Calculate the deletion time
  const deletionTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
  this.deletedAt = deletionTime;
  next();
});

module.exports = mongoose.model('LiveChat', LiveChatSchema);
