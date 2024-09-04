import {useEffect, useRef} from 'react';

/**
 * Custom hook to manage WebSocket connection.
 * @param {Function} onMessage - Callback function to handle incoming messages.
 * @param {string} url - The WebSocket server URL.
 */
const useWebSocket = (url = 'ws://localhost:4000') => {
    const wsRef = useRef(null); // Use a ref to store the WebSocket instance
    const dataRef = useRef(null); // Use a ref to store the latest data

    useEffect(() => {
        // Initialize WebSocket connection
        if (!wsRef.current)
            wsRef.current = new WebSocket(url);

        wsRef.current.onopen = () => {
            console.log('WebSocket connection opened');
        };

        wsRef.current.onmessage = (event) => {
            dataRef.current = JSON.parse(event.data); // Store the latest data
        };

        wsRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    }, [url]);

    // Function to send a message through the WebSocket
    const sendMessage = (message) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            const msg = JSON.stringify(message)

            wsRef.current.send(msg);

            return dataRef.current
        } else {
            console.error('WebSocket is not open. Unable to send message.');
        }
    };

    return {
        sendMessage,
        getData: () => dataRef.current, // Function to get the latest data message
    };
};

export default useWebSocket;
