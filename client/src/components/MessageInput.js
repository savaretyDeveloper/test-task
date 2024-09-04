import React, {useState} from 'react';

const MessageInput = ({onSend}) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage) {
            onSend(newMessage);
            setNewMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                required
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default MessageInput;
