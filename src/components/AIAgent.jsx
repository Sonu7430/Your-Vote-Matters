import React, { useState, useEffect } from 'react';
import { Bot, X, MessageCircle, Sparkles } from 'lucide-react';
import './AIAgent.css';

const AIAgent = ({ onOpenChat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hi! I'm your Election Navigator. Need help with the phases?");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ai-agent-wrapper ${isOpen ? 'visible' : ''}`}>
      {isOpen && (
        <div className="agent-bubble animate-pop-in">
          <button className="close-bubble" onClick={() => setIsOpen(false)}>
            <X size={14} />
          </button>
          <div className="agent-content">
            <div className="agent-avatar">
              <Sparkles size={16} />
            </div>
            <p>{message}</p>
          </div>
          <button 
            className="btn-agent-action" 
            onClick={() => {
              onOpenChat();
              setIsOpen(false);
            }}
          >
            Open Chat Assistant
          </button>
        </div>
      )}
      <button 
        className="floating-agent-btn" 
        onClick={() => setIsOpen(!isOpen)}
        title="Talk to AI Agent"
      >
        <Bot size={28} />
      </button>
    </div>
  );
};

export default AIAgent;
