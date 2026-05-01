import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Circle, MessageSquare } from 'lucide-react';
import './Timeline.css';

const electionSteps = [
  {
    id: 1,
    title: 'Phase 1: Voter Readiness',
    date: 'Months before Election',
    description: 'Bite: The foundation of voting is ensuring you are eligible and registered.',
    details: 'Snack:\n• Think of the voter roll as the guest list for a party—you need to be on it to get in.\n• Check your registration status early.\n• Update your address if you have moved.',
    checklist: [
      { id: 'reg', text: 'Check registration status', completed: false },
      { id: 'addr', text: 'Update address if moved', completed: false },
      { id: 'dead', text: 'Mark registration deadline', completed: false }
    ]
  },
  {
    id: 2,
    title: 'Phase 2: The Campaign Trail',
    date: 'Ongoing',
    description: 'Bite: Candidates share their platforms and compete for party nominations.',
    details: 'Snack:\n• Primary elections determine party representatives.\n• Delegates formally nominate candidates at conventions.\n• Research candidates using non-partisan resources.',
    checklist: [
      { id: 'prim', text: 'Identify primary dates', completed: false },
      { id: 'res', text: 'Read non-partisan guides', completed: false },
      { id: 'plat', text: 'Compare candidate platforms', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Phase 3: Casting the Ballot',
    date: 'Weeks up to Election Day',
    description: 'Bite: Voters cast their ballots through various methods.',
    details: 'Snack:\n• Early voting and mail-in options provide flexibility.\n• Follow mail-in instructions carefully.\n• Locate your polling station.',
    checklist: [
      { id: 'plan', text: 'Decide how to vote', completed: false },
      { id: 'poll', text: 'Find polling location', completed: false },
      { id: 'id', text: 'Check required voter ID', completed: false }
    ]
  },
  {
    id: 4,
    title: 'Phase 4: The Count',
    date: 'Election Night & Beyond',
    description: 'Bite: Election officials carefully tabulate the votes.',
    details: 'Snack:\n• Tabulation is the process of counting ballots.\n• Canvassing verifies every valid vote.\n• Results take time to be official.',
    checklist: [
      { id: 'track', text: 'Follow official count', completed: false },
      { id: 'ver', text: 'Understand verification steps', completed: false }
    ]
  },
  {
    id: 5,
    title: 'Phase 5: Certification',
    date: 'Weeks after Election',
    description: 'Bite: Results become official after a final review.',
    details: 'Snack:\n• Audits double-check accuracy.\n• Official certification concludes the cycle.',
    checklist: [
      { id: 'cert', text: 'View certified results', completed: false },
      { id: 'swear', text: 'Identify swearing-in dates', completed: false }
    ]
  }
];

const Timeline = ({ onDiscuss }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedItems, setCompletedItems] = useState({});

  const toggleItem = (stepId, itemId) => {
    setCompletedItems(prev => ({
      ...prev,
      [`${stepId}-${itemId}`]: !prev[`${stepId}-${itemId}`]
    }));
  };

  const calculateProgress = () => {
    const total = electionSteps.reduce((acc, step) => acc + step.checklist.length, 0);
    const completed = Object.values(completedItems).filter(Boolean).length;
    return Math.round((completed / total) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="timeline-container glass-panel">
      <div className="roadmap-header">
        <div className="progress-info">
          <h3>Your Voter Roadmap</h3>
          <span>{progress}% Ready to Vote</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
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
              <h4>Phase Checklist:</h4>
              <div className="checklist-container">
                {electionSteps[activeStep].checklist.map(item => (
                  <div 
                    key={item.id} 
                    className={`checklist-item ${completedItems[`${electionSteps[activeStep].id}-${item.id}`] ? 'checked' : ''}`}
                    onClick={() => toggleItem(electionSteps[activeStep].id, item.id)}
                  >
                    <div className="checkbox">
                      {completedItems[`${electionSteps[activeStep].id}-${item.id}`] && <CheckCircle2 size={16} />}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="detail-actions">
              <button 
                className="btn-discuss"
                onClick={() => onDiscuss(`Tell me more about ${electionSteps[activeStep].title}. I'm curious about the specific procedures involved.`)}
              >
                <MessageSquare size={18} />
                Ask Assistant
              </button>
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
