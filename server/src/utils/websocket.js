const WebSocket = require('ws');

let wss;

/**
 * Initializes the WebSocket server.
 * @param {Object} serverInstance - The HTTP server instance.
 */
const initializeWebSocketServer = (serverInstance) => {
    wss = new WebSocket.Server({server: serverInstance});

    wss.on('connection', (ws) => {
        console.log('New client connected');

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
};

/**
 * Broadcasts a message to all connected clients.
 * @param {Object} data - The message to be sent.
 */
const broadcastMessage = (data) => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            const msg = JSON.stringify(data)
            client.send(msg);
        }
    });
};

module.exports = {
    initializeWebSocketServer,
    broadcastMessage,
};
