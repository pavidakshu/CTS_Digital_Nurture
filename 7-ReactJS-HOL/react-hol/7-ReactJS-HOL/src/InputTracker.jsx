import React, { useState } from 'react'

function InputTracker() {
  const [text, setText] = useState('')

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      <h2>Input Tracker (useState)</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '10px', width: '100%', boxSizing: 'border-box', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <p style={{ marginTop: '12px' }}>Characters typed: <strong>{text.length}</strong></p>
      <p>Value: <strong>{text || '(empty)'}</strong></p>
    </div>
  )
}

export default InputTracker
