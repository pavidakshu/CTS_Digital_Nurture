import React, { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval = null
    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px', textAlign: 'center' }}>
      <h2>Timer (useEffect)</h2>
      <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{seconds}s</p>
      <button onClick={() => setRunning(true)} style={btn('#4caf50')}>Start</button>
      <button onClick={() => setRunning(false)} style={btn('#f44336')}>Stop</button>
      <button onClick={() => { setRunning(false); setSeconds(0) }} style={btn('#9e9e9e')}>Reset</button>
    </div>
  )
}

function btn(bg) {
  return { backgroundColor: bg, color: 'white', border: 'none', padding: '10px 18px', margin: '5px', borderRadius: '4px', cursor: 'pointer' }
}

export default Timer
