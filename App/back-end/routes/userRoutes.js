const express = require('express');
const router = express.Router();

const {
    allUserInfo,
    basicUserInfo,
    likes,
    listOfLikedPosts,
    dislikes,
    posts,
    numberOf,
} = require('../controllers/userController');

router.post('/allInfo', allUserInfo);
router.post('/basicInfo', basicUserInfo);
router.post('/likes', likes);
router.post('/listOfLikes', listOfLikedPosts)
router.post('/dislikes', dislikes);
router.post('/posts', posts);
router.post('/numberOf', numberOf);

module.exports = router;