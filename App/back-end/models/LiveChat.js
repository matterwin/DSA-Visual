const mongoose = require('mongoose');

const LiveChatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    message:{
        type:String,
        minlength:1,
        maxlength:100,
        required: true,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    
},{ timestamps:true });

// Pre-save hook to delete the instance after 24 hours
// LiveChatSchema.pre('save', function (next) {
//     const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//     const currentTime = new Date().getTime();
//     const messageTime = this.createdAt.getTime();
  
//     if (currentTime - messageTime >= twentyFourHours) {
//       // Delete the instance if it's older than 24 hours
//       this.remove();
//     }
  
//     next();
// });

module.exports = mongoose.model('LiveChat', LiveChatSchema)