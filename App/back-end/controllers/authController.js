const User = require('../models/User');

const register = async (req,res) => {
    const { username, email, password} = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
        console.log('error: email already exists');
    }

    const user = await User.create({ username, email, password });

    res.status(200).json({ user });
}

const login = async (req,res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email });

    res.status(200).json({ user });
}

module.exports = {
    register,
    login
}