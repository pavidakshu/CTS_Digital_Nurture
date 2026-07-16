import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Reusable Components</h2>
        <div>
          <Card title="Component A" description="This is the first reusable card component." />
          <Card title="Component B" description="This is the second reusable card component." />
          <Card title="Component C" description="This is the third reusable card component." />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
