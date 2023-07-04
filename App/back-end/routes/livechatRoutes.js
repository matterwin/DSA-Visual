const express = require('express');
const router = express.Router();

const {
    seeLiveChat,
    postComment
} = require('../controllers/livechatController');

router.get('/seeChat', seeLiveChat);
router.post('/postComment', postComment);

module.exports = router;