import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({messages}) => {
    return (
        <ul>
            {
                messages.map(
                    (msg, index) => (
                        <MessageItem key={index} message={msg}/>
                    )
                )
            }
        </ul>
    );
};

export default MessageList;
