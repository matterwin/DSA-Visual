const express = require('express');
const router = express.Router();

const {
    basicUserInfo,
    checkEmail,
    register,
    login,
} = require('../controllers/authController');

router.post('/userInfo', basicUserInfo);
router.post('/checkEmail', checkEmail);
router.post('/register', register);
router.post('/login', login);

module.exports = router;