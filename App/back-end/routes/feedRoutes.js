const express = require('express');
const router = express.Router();

const {
    allPosts,
    clearFeed,
    userPost,
    likePost
} = require('../controllers/feedController');

router.get('/homeFeed/all', allPosts);
router.delete('/homeFeed/clearFeed', clearFeed);
router.post('/homeFeed/post', userPost);
router.post('/homeFeed/like', likePost);

module.exports = router;