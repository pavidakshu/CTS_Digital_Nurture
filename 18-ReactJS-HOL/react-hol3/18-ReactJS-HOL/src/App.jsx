import React from 'react'
import Counter from './Counter'
import Greeting from './Greeting'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>React Testing Demo</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>Run <code>npm test</code> to execute the test suites</p>
      <Greeting name="Alice" isLoggedIn={true} />
      <hr />
      <Counter />
    </div>
  )
}

export default App
