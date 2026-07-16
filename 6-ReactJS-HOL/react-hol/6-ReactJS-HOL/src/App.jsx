import React from 'react'
import Counter from './Counter'
import ToggleMessage from './ToggleMessage'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>State & Event Handling</h1>
      <Counter />
      <ToggleMessage />
    </div>
  )
}

export default App
