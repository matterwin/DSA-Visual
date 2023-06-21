const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Provide username"],
        minlength:3,
        maxlength:35
    },
    email:{
        type:String,
        unique:true,
        required: [true, "Provide email"],
        validate: {
            validator: validator.isEmail,
            message: 'Provide valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'Provide password'],
        minlength: 6,
    },
})

module.exports = mongoose.model('User', UserSchema);