const express = require('express');
const router = express.Router();

const {
    basicUserInfo,
    checkEmail,
    register,
    login,
    deleteAllUserAccounts
} = require('../controllers/authController');

router.post('/userInfo', basicUserInfo);
router.post('/checkEmail', checkEmail);
router.post('/register', register);
router.post('/login', login);
router.delete('/delete', deleteAllUserAccounts);

module.exports = router;