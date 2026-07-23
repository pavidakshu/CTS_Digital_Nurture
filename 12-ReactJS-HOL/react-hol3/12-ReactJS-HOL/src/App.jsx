import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { BuggyCounter, StableWidget } from './Widgets'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Error Boundaries Demo</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Each widget is wrapped in its own error boundary — one crash does not affect the other
      </p>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <div style={{ marginTop: '20px' }}>
        <ErrorBoundary>
          <StableWidget />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
