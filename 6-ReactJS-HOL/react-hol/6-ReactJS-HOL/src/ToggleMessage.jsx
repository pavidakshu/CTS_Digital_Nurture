import React, { useState } from 'react'

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Toggle Message</h2>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{ padding: '10px 20px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && (
        <p style={{ marginTop: '16px', fontSize: '18px', color: '#333' }}>
          Hello! This message is toggled using React state.
        </p>
      )}
    </div>
  )
}

export default ToggleMessage
