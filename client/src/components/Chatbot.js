
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chatbot.css';

function Chatbot({ className, isVisible, onToggle }) {
  const [inputMessage, setInputMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    // Lấy lịch sử chat từ localStorage khi component được tạo
    const storedChatHistory = localStorage.getItem('chatHistory');
    if (storedChatHistory) {
      setChatLog(JSON.parse(storedChatHistory));
    }
  }, []);

  useEffect(() => {
    // Lưu lịch sử chat vào localStorage sau mỗi lần nhắn tin
    localStorage.setItem('chatHistory', JSON.stringify(chatLog));
  }, [chatLog]);

  const sendMessage = async () => {
    const newMessage = { role: 'user', content: inputMessage };
    setChatLog((prevChatLog) => [...prevChatLog, newMessage]);

    try {
      // Gửi request đến API OpenAI
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo-0613',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            ...chatLog,
            { role: 'user', content: inputMessage },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
        }
      );

      const botReply = response.data.choices[0].message.content.trim();
      const botMessage = { role: 'assistant', content: botReply };

      setChatLog((prevChatLog) => [...prevChatLog, botMessage]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    }

    setInputMessage('');
  };

  return (
    <div className={`chatbot-container mt-5 ${className}`}>
      <div className='chatbot-container-box'>
      {isVisible && (
        <div className="chat-container border rounded p-3">
          {chatLog.map((entry, index) => (
            <div
              key={index}
              className={`chat-entry ${
                entry.role === 'user' ? 'user-entry text-end' : 'assistant-entry text-start'
              }`}
            >
              <div
                className={`message-box ${
                  entry.role === 'user' ? 'user-message-box' : 'assistant-message-box'
                }`}
              >
                {entry.content}
              </div>
            </div>
            
          ))}
        </div>
        
      )}
      {isVisible && (
        <div className="input-container">
          <input
            type="text"
            className="form-control"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="btn btn-primary ms-2" onClick={sendMessage}>
            Send
          </button>
        </div>
      )}
      </div>
      <button className="toggle-chatbot-btn" onClick={onToggle}>
        {isVisible ? 'Hide Chatbot' : 'Show Chatbot'}
      </button>
    </div>
  );
}

export default Chatbot;
