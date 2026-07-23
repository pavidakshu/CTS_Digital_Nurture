import React, { useState } from 'react'

function BuggyCounter() {
  const [count, setCount] = useState(0)

  if (count === 3) {
    throw new Error('Counter reached 3 — intentional crash!')
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
      <h3>Buggy Counter</h3>
      <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{count}</p>
      <p style={{ color: '#999', fontSize: '13px' }}>Crashes at 3</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: '8px 18px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Increment
      </button>
    </div>
  )
}

function StableWidget() {
  return (
    <div style={{ padding: '20px', border: '1px solid #4caf50', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9fff9' }}>
      <h3 style={{ color: '#4caf50' }}>Stable Widget</h3>
      <p>This component works fine and is wrapped in its own boundary.</p>
    </div>
  )
}

export { BuggyCounter, StableWidget }
