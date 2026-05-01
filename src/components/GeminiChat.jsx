import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Bot, User, Key, Loader2, Sparkles } from 'lucide-react';
import './GeminiChat.css';

const GeminiChat = () => {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
  const [isKeySet, setIsKeySet] = useState(!!import.meta.env.VITE_GEMINI_API_KEY);
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Hi! I am your Election Assistant AI. Ask me anything about the voting process, candidate research, or election deadlines!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSetKey = (e) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setIsKeySet(true);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !apiKey) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.5-flash',
        systemInstruction: "You are a helpful and neutral Election Assistant AI. You help users understand the election process, voting laws, and civic duties. You do not show political bias or endorse candidates. Keep your answers concise and easy to understand."
      });
      
      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, { role: 'model', text: `Sorry, I encountered an error: ${error.message}. Please check your API key.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isKeySet) {
    return (
      <div className="chat-container glass-panel key-prompt-container">
        <div className="chat-header">
          <Sparkles className="chat-icon" size={28} />
          <h2>AI Election Assistant</h2>
        </div>
        <p className="key-description">
          To chat with the AI assistant, please provide your Gemini API Key. 
          Your key is only stored locally in your browser during this session.
        </p>
        <form onSubmit={handleSetKey} className="key-form">
          <div className="input-group">
            <Key size={20} className="input-icon" />
            <input 
              type="password" 
              placeholder="Paste your Gemini API Key here..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Connect AI</button>
        </form>
      </div>
    );
  }

  return (
    <div className="chat-container glass-panel">
      <div className="chat-header">
        <Sparkles className="chat-icon" size={28} />
        <h2>AI Election Assistant</h2>
        <button 
          className="btn-reset-key" 
          onClick={() => setIsKeySet(false)}
          title="Change API Key"
        >
          <Key size={16} />
        </button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message-wrapper ${msg.role}`}>
            <div className="message-avatar">
              {msg.role === 'model' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message-wrapper model loading">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <Loader2 className="spinner" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input
          type="text"
          placeholder="Ask a question about the election process..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default GeminiChat;
