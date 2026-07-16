import React from 'react'
import Timer from './Timer'
import InputTracker from './InputTracker'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '520px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>React Hooks Demo</h1>
      <Timer />
      <InputTracker />
    </div>
  )
}

export default App
