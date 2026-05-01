import React from 'react'
import Timeline from './components/Timeline'
import ElectionChart from './components/ElectionChart'
import FAQAssistant from './components/FAQAssistant'
import GeminiChat from './components/GeminiChat'
import './App.css'

function App() {
  return (
    <>
      {/* Background decoration */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container">
        <header className="hero animate-fade-in">
          <h1>Your Vote Matters</h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Understanding the election process doesn't have to be complicated. 
            Follow our interactive guide to ensure you're ready for Election Day.
          </p>
        </header>

        <main>
          <Timeline />
          <ElectionChart />
          <FAQAssistant />
          <GeminiChat />
        </main>

        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)', marginTop: '2rem' }}>
          <p>© {new Date().getFullYear()} Election Assistant. Built for democracy.</p>
        </footer>
      </div>
    </>
  )
}

export default App
