const express = require('express');
const router = express.Router();

const {
    allUserInfo,
    basicUserInfo,
    likes,
    dislikes,
    posts,
    numberOf,
} = require('../controllers/userController');

router.post('/allInfo', allUserInfo);
router.post('/basicInfo', basicUserInfo);
router.post('/likes', likes);
router.post('/dislikes', dislikes);
router.post('/posts', posts);
router.post('/numberOf', numberOf);

module.exports = router;