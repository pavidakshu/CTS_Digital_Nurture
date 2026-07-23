import React from 'react'
import Clock from './Clock'
import StudentList from './StudentList'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Class Components & Lifecycle</h1>
      <Clock />
      <StudentList />
    </div>
  )
}

export default App
