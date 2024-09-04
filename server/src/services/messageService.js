let messages = []; // Global array for storing messages

/**
 * Adds a message to the global storage.
 * @param {string} message - The message to be added.
 * @returns {Object} - The newly added message.
 */
const addMessage = (message) => {
    let removedMessage = ""

    if (messages.length >= 9) {
        removedMessage = messages[0]
        messages.shift();
    }

    messages.push(message);

    return {newMessage: message, messages, removedMessage};
};

/**
 * Retrieves all messages.
 * @returns {Array} - The array of messages.
 */
const getMessages = () => {
    return messages;
};

module.exports = {
    addMessage,
    getMessages,
};
