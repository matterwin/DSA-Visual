const express = require('express');
const router = express.Router();

const {
    checkEmail,
    checkUsername,
    register,
    login,
} = require('../controllers/authController');

router.post('/checkEmail', checkEmail);
router.post('/checkUsername', checkUsername);
router.post('/register', register);
router.post('/login', login);

module.exports = router;