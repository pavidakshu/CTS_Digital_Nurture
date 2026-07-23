import React, { useState, useMemo, useCallback, memo } from 'react'

const ExpensiveChild = memo(function ExpensiveChild({ label, onClick }) {
  const renderCount = React.useRef(0)
  renderCount.current += 1

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '14px', marginBottom: '10px' }}>
      <p><strong>{label}</strong></p>
      <p style={{ color: '#666', fontSize: '13px' }}>Render count: {renderCount.current}</p>
      <button
        onClick={onClick}
        style={{ padding: '6px 14px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  )
})

function PrimeCalculator({ limit }) {
  const primes = useMemo(() => {
    const result = []
    for (let n = 2; n <= limit; n++) {
      let isPrime = true
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { isPrime = false; break }
      }
      if (isPrime) result.push(n)
    }
    return result
  }, [limit])

  return (
    <div style={{ border: '1px solid #9c27b0', borderRadius: '6px', padding: '14px', marginBottom: '10px', backgroundColor: '#fdf4ff' }}>
      <p><strong>useMemo — Primes up to {limit}:</strong></p>
      <p style={{ color: '#555', fontSize: '13px' }}>Found {primes.length} primes (expensive calc memoized)</p>
      <p style={{ fontSize: '12px', color: '#888', wordBreak: 'break-word' }}>{primes.slice(0, 20).join(', ')}{primes.length > 20 ? '...' : ''}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [limit, setLimit] = useState(100)

  const handleButtonA = useCallback(() => {
    alert('Button A clicked — useCallback prevents new function on re-render')
  }, [])

  const handleButtonB = useCallback(() => {
    alert(`Button B clicked — count is ${count}`)
  }, [count])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Performance Optimization</h1>

      <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <p><strong>Counter:</strong> {count}</p>
        <button onClick={() => setCount(c => c + 1)} style={{ padding: '8px 16px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '8px' }}>
          Increment Counter
        </button>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type to trigger re-renders..."
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '8px', width: '100%', boxSizing: 'border-box' }}
        />
      </div>

      <h3>React.memo — Prevents unnecessary re-renders</h3>
      <ExpensiveChild label="Button A (stable callback via useCallback)" onClick={handleButtonA} />
      <ExpensiveChild label="Button B (updates when count changes)" onClick={handleButtonB} />

      <h3>useMemo — Memoizes expensive computation</h3>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
        <label>Prime limit:</label>
        <input
          type="number"
          value={limit}
          onChange={e => setLimit(Number(e.target.value))}
          style={{ padding: '6px', width: '80px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>
      <PrimeCalculator limit={limit} />
    </div>
  )
}

export default App
