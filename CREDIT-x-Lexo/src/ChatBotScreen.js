// src/screens/ChatBotScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ChatBotScreen = () => {
    const [query, setQuery] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = async () => {
        if (query.trim() === '') return;
        const answer = await getAIResponse(query);
        setMessages([...messages, { key: `Q-${messages.length}`, type: 'user', text: query }, { key: `A-${messages.length}`, type: 'ai', text: answer }]);
        setQuery('');
    };

    const renderItem = ({ item }) => (
        <View style={item.type === 'user' ? styles.userMessage : styles.aiMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderItem}
                contentContainerStyle={styles.chatHistory}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Ask Lexo AI..."
                />
                <Button title="Send" onPress={handleSend} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    chatHistory: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#1976d2',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    aiMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    messageText: {
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
});

export default ChatBotScreen;
