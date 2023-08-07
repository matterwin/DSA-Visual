const express = require('express');
const router = express.Router();

const {
    allPosts,
    allPostsNoLimit,
    allPostsForUser,
    clearFeed,
    userPost,
    likePost,
    dislikePost,
} = require('../controllers/feedController');

router.get('/homeFeed/all', allPosts);
router.get('/homeFeed/allNoLimit', allPostsNoLimit);
router.get('/homeFeed/allForUser', allPostsForUser)
router.delete('/homeFeed/clearFeed', clearFeed);
router.post('/homeFeed/post', userPost);
router.post('/homeFeed/like', likePost);
router.post('/homeFeed/dislike', dislikePost);

module.exports = router;