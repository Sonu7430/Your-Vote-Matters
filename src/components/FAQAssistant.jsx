import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './FAQAssistant.css';

const faqs = [
  {
    id: 1,
    question: "Do I need an ID to vote?",
    answer: "It depends on your state. Some states require a photo ID, some accept non-photo ID, and others don't require any ID at the polls. Check your state's specific requirements before Election Day."
  },
  {
    id: 2,
    question: "What if I make a mistake on my ballot?",
    answer: "If you make a mistake on a paper ballot, do not try to cross it out or fix it. Return it to a poll worker and ask for a new ballot. If you are voting by mail, contact your local election office for instructions on getting a replacement."
  },
  {
    id: 3,
    question: "Can I take time off work to vote?",
    answer: "Many states require employers to give employees time off to vote, often paid. The amount of time and conditions vary by state law."
  },
  {
    id: 4,
    question: "What if I am in line when the polls close?",
    answer: "Stay in line! If you are in line before the official closing time of your polling place, you have the legal right to cast your vote."
  }
];

const FAQAssistant = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container glass-panel">
      <div className="faq-header">
        <HelpCircle className="faq-icon" size={32} />
        <h2>Voter Assistant & FAQs</h2>
      </div>
      <p className="faq-subtitle">Quick answers to common questions about the voting process.</p>
      
      <div className="faq-list">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-item ${openId === faq.id ? 'open' : ''}`}
          >
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(faq.id)}
              aria-expanded={openId === faq.id}
            >
              <span>{faq.question}</span>
              {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
            <div 
              className="faq-answer-wrapper"
              style={{
                maxHeight: openId === faq.id ? '200px' : '0',
                opacity: openId === faq.id ? 1 : 0
              }}
            >
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAssistant;
