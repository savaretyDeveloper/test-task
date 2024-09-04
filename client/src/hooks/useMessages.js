import {useQuery, useMutation, useQueryClient} from 'react-query';
import {fetchMessages, postMessage} from '../services/messageService';
import {useState} from "react";
import useWebSocket from "./useWebSocket";

/**
 * Custom hook for managing messages.
 * Fetches messages, adds new ones, and manages state.
 * @returns {Object} - Object containing messages, loading state, and function to add a message.
 */
const useMessages = () => {
    const queryClient = useQueryClient();
    const [isFirstFetch, setIsFirstFetch] = useState(true);

    // Query to fetch all messages
    const {
        data: messages = [],
        isLoading,
        isError
    } = useQuery('messages', fetchMessages);

    const requestMessage = async (message) => {
        try {
            const data = await postMessage(message)

            if (isFirstFetch) {
                return data.newMessage // Send message to server
            } else {
                return getData()?.newMessage
            }
        } catch (error) {
            console.error('Error posting message:', error);
            throw error; // Propagate error
        }
    }

    // Call useWebSocket unconditionally
    const {getData} = useWebSocket();

    // Mutation for adding a new message
    const mutation = useMutation(
        requestMessage,
        {
            onSuccess: (newMessage) => {
                setIsFirstFetch(false)
                // Update message list after successful addition
                queryClient.setQueryData('messages', (oldMessages) => {
                    const updatedMessages = [...oldMessages, newMessage];
                    return updatedMessages.slice(-9); // Limit to 9 messages
                });
            },
        }
    );

    /**
     * Function to add a new message.
     * @param {string} message - The message to be added.
     */
    const addMessage = async (message) => {
        await mutation.mutateAsync(message); // Call mutation
    };

    const getNotificationMessages = () => {
        const data = getData();

        const messages = [];

        if (data?.removedMessage) {
            messages.push(`Removed message: ${data?.removedMessage}`);
        }

        if (data?.newMessage) {
            messages.push(`New message: ${data?.newMessage}`);
        }

        return messages;
    };

    return {
        messages,
        isLoading,
        isError,
        addMessage,
        getNotificationMessages
    };
};

export default useMessages;
