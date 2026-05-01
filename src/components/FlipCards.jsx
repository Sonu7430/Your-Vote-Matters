import React, { useState } from 'react';
import './FlipCards.css';

const terms = [
  {
    term: "Canvassing",
    definition: "The formal process where election officials verify that every valid vote is counted accurately.",
    analogy: "Like a shopkeeper counting the register at the end of the day to ensure every cent matches the receipts."
  },
  {
    term: "Tabulation",
    definition: "The mechanical or electronic process of totaling the votes cast in an election.",
    analogy: "The actual 'adding up' of the scores in a sports game."
  },
  {
    term: "Provisional Ballot",
    definition: "A ballot provided to a voter whose eligibility is in question on Election Day.",
    analogy: "A 'rain check' that ensures your vote is held safely until your status is confirmed."
  },
  {
    term: "Certification",
    definition: "The legal act of signing off on the final, official results of an election.",
    analogy: "The judge's final verdict that makes a decision legally binding."
  }
];

const FlipCards = () => {
  return (
    <section className="flipcards-section">
      <div className="section-header">
        <h2>Election Vocabulary</h2>
        <p>Click a card to reveal the definition and a simple analogy.</p>
      </div>
      <div className="flipcards-grid">
        {terms.map((item, index) => (
          <FlipCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{item.term}</h3>
          <div className="tap-indicator">Tap to reveal</div>
        </div>
        <div className="flip-card-back">
          <p className="definition">{item.definition}</p>
          <div className="analogy-box">
            <strong>Analogy:</strong>
            <p>{item.analogy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
