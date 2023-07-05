const express = require('express');
const router = express.Router();

const {
    uploadProfileImage,
    changeProfileImage
} = require('../controllers/uploadController');

router.route('/profilepic').post(uploadProfileImage);
router.route('/changePP/:userId').post(changeProfileImage);


module.exports = router;