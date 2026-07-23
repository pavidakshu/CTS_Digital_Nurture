import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'

function Counter() {
  const count = useSelector(state => state.counter.value)
  const history = useSelector(state => state.counter.history)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(5)

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Redux Counter</h1>

      <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
        <p style={{ fontSize: '60px', fontWeight: 'bold', margin: '10px 0', color: count < 0 ? 'red' : '#333' }}>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())} style={btn('#4caf50')}>+ 1</button>
          <button onClick={() => dispatch(decrement())} style={btn('#f44336')}>- 1</button>
          <button onClick={() => dispatch(reset())} style={btn('#9e9e9e')}>Reset</button>
        </div>
        <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            style={{ width: '70px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', textAlign: 'center' }}
          />
          <button onClick={() => dispatch(incrementByAmount(amount))} style={btn('#2196f3')}>Add Amount</button>
        </div>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', maxHeight: '180px', overflowY: 'auto' }}>
        <h3 style={{ marginTop: 0 }}>Action History</h3>
        {history.length === 0 ? (
          <p style={{ color: '#999' }}>No actions yet</p>
        ) : (
          history.map((entry, i) => (
            <p key={i} style={{ margin: '4px 0', fontSize: '14px', color: '#555' }}>• {entry}</p>
          ))
        )}
      </div>
    </div>
  )
}

function btn(bg) {
  return { backgroundColor: bg, color: 'white', border: 'none', padding: '10px 18px', margin: '5px', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }
}

export default Counter
