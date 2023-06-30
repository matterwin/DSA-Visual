const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required: [true, "Provide username"],
        minlength:3,
        maxlength:15
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
    profilePic:{
        type: String
    }
})

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', UserSchema);