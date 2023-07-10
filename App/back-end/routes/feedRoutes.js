const express = require('express');
const router = express.Router();

const {
    allPosts,
    userPost
} = require('../controllers/feedController');

router.get('/homeFeed/all', allPosts);
router.post('/homeFeed/post', userPost);

module.exports = router;