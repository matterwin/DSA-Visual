const express = require('express');
const router = express.Router();

const {
    seeLiveChat,
    clearChat,
    postComment
} = require('../controllers/livechatController');

router.get('/seeChat', seeLiveChat);
router.delete('/clearChat', clearChat);
router.post('/postComment', postComment);

module.exports = router;