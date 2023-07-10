const express = require('express');
const router = express.Router();

const {
    getAllPosts
} = require('../controllers/feedController');

router.get('/homeFeed/all', getAllPosts);

module.exports = router;