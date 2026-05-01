import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Circle } from 'lucide-react';
import './Timeline.css';

const electionSteps = [
  {
    id: 1,
    title: 'Voter Registration',
    date: 'Up to 30 days before election',
    description: 'Ensure you are registered to vote at your current address. Check your state\'s specific deadlines.',
    details: 'You can register online, by mail, or in person. Requirements vary by state, but generally require proof of identity and residency.'
  },
  {
    id: 2,
    title: 'Research Candidates & Issues',
    date: 'Ongoing',
    description: 'Learn about the candidates on your ballot and the ballot measures you will be voting on.',
    details: 'Use non-partisan resources like Vote411 or Ballotpedia to view your sample ballot and read up on candidate platforms.'
  },
  {
    id: 3,
    title: 'Make a Plan to Vote',
    date: '1-2 weeks before election',
    description: 'Decide how, when, and where you will vote. Will you vote early, by mail, or on Election Day?',
    details: 'Check your polling location, figure out your transportation, and verify what ID you need to bring, if any.'
  },
  {
    id: 4,
    title: 'Early Voting / Mail-in',
    date: 'Varies by state (usually weeks before)',
    description: 'If available in your state, vote early in person or return your mail-in ballot.',
    details: 'Make sure to follow all instructions on mail-in ballots carefully (e.g., signing the envelope) and return it by the deadline.'
  },
  {
    id: 5,
    title: 'Election Day',
    date: 'First Tuesday in November',
    description: 'Go to your assigned polling place and cast your ballot.',
    details: 'Poll hours vary by state. As long as you are in line before the polls close, you have the right to vote.'
  }
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="timeline-container glass-panel">
      <div className="timeline-layout">
        
        {/* Left Side: Timeline Steps */}
        <div className="timeline-steps">
          {electionSteps.map((step, index) => {
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <div 
                key={step.id} 
                className={`timeline-item ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="timeline-icon-wrapper">
                  {isPast ? (
                    <CheckCircle2 className="timeline-icon success" size={24} />
                  ) : isActive ? (
                    <div className="timeline-icon-pulse">
                      <Circle className="timeline-icon active" size={24} />
                    </div>
                  ) : (
                    <Circle className="timeline-icon pending" size={24} />
                  )}
                  {index < electionSteps.length - 1 && <div className="timeline-connector"></div>}
                </div>
                
                <div className="timeline-content">
                  <h3 className="step-title">{step.title}</h3>
                  <span className="step-date">{step.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Step Details */}
        <div className="timeline-details animate-fade-in" key={activeStep}>
          <div className="detail-card">
            <h2>{electionSteps[activeStep].title}</h2>
            <div className="detail-meta">
              <span className="badge">Phase {electionSteps[activeStep].id}</span>
              <span className="date-highlight">{electionSteps[activeStep].date}</span>
            </div>
            <p className="detail-description">{electionSteps[activeStep].description}</p>
            <div className="detail-deepdive">
              <h4>What you need to know:</h4>
              <p>{electionSteps[activeStep].details}</p>
            </div>
            
            <div className="detail-actions">
              <button 
                className="btn-next"
                onClick={() => setActiveStep(prev => Math.min(prev + 1, electionSteps.length - 1))}
                disabled={activeStep === electionSteps.length - 1}
              >
                {activeStep === electionSteps.length - 1 ? 'Process Complete' : 'Next Phase'}
                {activeStep !== electionSteps.length - 1 && <ChevronRight size={18} />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
