const messageService = require('../services/messageService');
const {broadcastMessage} = require("../utils/websocket");

/**
 * Handler for POST requests to create a new message.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const createMessage = async (req, res, next) => {
    try {
        const {message} = req.body;

        if (!message) {
            return res.status(400).send('Message is required'); // Check for message presence
        }

        const data = messageService.addMessage(message);

        broadcastMessage(data)

        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

/**
 * Handler for GET requests to retrieve all messages.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const getMessages = async (req, res, next) => {
    try {
        const messages = messageService.getMessages();
        res.json(messages);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMessage,
    getMessages,
};
