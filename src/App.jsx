import React from 'react'
import Timeline from './components/Timeline'
import ElectionChart from './components/ElectionChart'
import FAQAssistant from './components/FAQAssistant'
import GeminiChat from './components/GeminiChat'
import FlipCards from './components/FlipCards'
import AIAgent from './components/AIAgent'
import Resources from './components/Resources'
import './App.css'
import { useState } from 'react'

function App() {
  const [prefilledChat, setPrefilledChat] = useState('');

  const handleDiscuss = (topic) => {
    setPrefilledChat(topic);
    const chatElement = document.getElementById('ai-chat-section');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* Background decoration */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container">
        <header className="hero animate-fade-in">
          <h1>VoteVidya</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Empowering voters with knowledge. 
            Navigate the election cycle with our interactive guide.
          </p>
        </header>

        <main>
          <Timeline onDiscuss={handleDiscuss} />
          <ElectionChart />
          <FlipCards />
          <FAQAssistant />
          <Resources />
          <div id="ai-chat-section">
            <GeminiChat initialInput={prefilledChat} />
          </div>
        </main>
        
        <AIAgent onOpenChat={() => handleDiscuss("I'd like to understand the complete election process from start to finish.")} />

        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', marginTop: '2rem' }}>
          <p>© {new Date().getFullYear()} Election Assistant. Built for democracy.</p>
        </footer>
      </div>
    </>
  )
}

export default App
