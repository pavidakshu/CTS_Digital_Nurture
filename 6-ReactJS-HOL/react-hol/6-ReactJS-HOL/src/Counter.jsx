import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '48px', fontWeight: 'bold', color: count < 0 ? 'red' : '#333' }}>{count}</p>
      <button onClick={() => setCount(count + 1)} style={btnStyle('#4caf50')}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={btnStyle('#f44336')}>Decrement</button>
      <button onClick={() => setCount(0)} style={btnStyle('#9e9e9e')}>Reset</button>
    </div>
  )
}

function btnStyle(bg) {
  return {
    backgroundColor: bg,
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
}

export default Counter
