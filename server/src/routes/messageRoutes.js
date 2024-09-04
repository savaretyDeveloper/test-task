const express = require('express');
const {getMessages, createMessage} = require('../controllers/messageController');

const router = express.Router();

router.post('/', createMessage); // POST /messages
router.get('/', getMessages); // GET /messages

module.exports = router;
