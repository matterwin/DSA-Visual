const express = require('express');
const router = express.Router();

const {
    allPosts,
    allPostsNoLimit,
    allPostsForUser,
    allPostsSortBy,
    getSinglePost,
    clearFeed,
    userPost,
    likePost,
    dislikePost,
    replyToPost,
    getRepliesToPost
} = require('../controllers/feedController');

router.get('/homeFeed/all', allPosts);
router.get('/homeFeed/allNoLimit', allPostsNoLimit);
router.get('/homeFeed/allForUser', allPostsForUser);
router.get('/homeFeed/allSortBy', allPostsSortBy);
router.delete('/homeFeed/clearFeed', clearFeed);
router.post('/homeFeed/post', userPost);
// router.get('/homeFeed/post/:id', getSinglePost); //correct jwt version
router.get('/homeFeed/getPost', getSinglePost);
router.post('/homeFeed/reply', replyToPost)
router.post('/homeFeed/like', likePost);
router.post('/homeFeed/dislike', dislikePost);
router.get('/posts/replies/:postId', getRepliesToPost);

module.exports = router;