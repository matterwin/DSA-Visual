const express = require('express');
const router = express.Router();

const {
    allPosts,
    clearFeed,
    userPost,
    likePost,
    dislikePost,
} = require('../controllers/feedController');

router.get('/homeFeed/all', allPosts);
router.delete('/homeFeed/clearFeed', clearFeed);
router.post('/homeFeed/post', userPost);
router.post('/homeFeed/like', likePost);
router.post('/homeFeed/dislike', dislikePost);

module.exports = router;