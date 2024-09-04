/**
 * Function to send a new message to the server.
 * @param {string} message - The message to be sent.
 * @returns {Promise<Object>} - Returns the server's response.
 */
export const postMessage = async (message) => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message}), // Send only the message
        });

        if (!response.ok) {
            throw new Error('Failed to post message');
        }

        return response.json(); // Return server response
    } catch (error) {
        console.error('Error in postMessage service:', error);
        throw error; // Propagate error
    }
};

/**
 * Function to fetch all messages from the server.
 * @returns {Promise<Array>} - Returns an array of messages.
 */
export const fetchMessages = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/messages');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json(); // Return array of messages
    } catch (error) {
        console.error('Error in fetchMessages service:', error);
        throw error; // Propagate error
    }
};
