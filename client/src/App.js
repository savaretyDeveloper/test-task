import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import useMessages from './hooks/useMessages';
import MessageItem from "./components/MessageItem";

const queryClient = new QueryClient();

const App = () => {
    const {
        messages,
        isLoading,
        isError,
        addMessage,
        getNotificationMessages
    } = useMessages();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading messages.</div>;

    return (
        <div className={'App-link'}>
            <h1>Messages</h1>
            <MessageList messages={messages}/>
            <MessageInput onSend={addMessage}/>
            <MessageList messages={getNotificationMessages()}/>
        </div>
    );
};

const Root = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    );
};

export default Root;
