const express = require('express');
const router = express.Router();

const {
    uploadProfileImage
} = require('../controllers/uploadController');

router.route('/profilepic').post(uploadProfileImage);

module.exports = router;