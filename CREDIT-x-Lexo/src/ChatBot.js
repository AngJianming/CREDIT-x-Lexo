// src/components/ChatBot.js
import React, { useState } from 'react';

const ChatBot = () => {
    const [query, setQuery] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSend = async () => {
        if (query.trim() === '') return;
        const answer = await getAIResponse(query);
        setResponses([...responses, { question: query, answer }]);
        setQuery('');
    };

    return (
        <div className="chatbot-container">
            <div className="chat-history">
                {responses.map((item, index) => (
                    <div key={index} className="chat-message">
                        <strong>You:</strong> {item.question}
                        <br />
                        <strong>Lexo AI:</strong> {item.answer}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Lexo AI..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatBot;
