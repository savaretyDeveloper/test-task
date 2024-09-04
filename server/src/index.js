const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes');
const {initializeWebSocketServer} = require('./utils/websocket');
const errorHandler = require("./middlewares/errorHandler");

require('dotenv').config();

const {port} = require('./config')

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/messages', messageRoutes);
app.use(errorHandler);

// Start HTTP server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Initialize WebSocket server
initializeWebSocketServer(server);
