import React from 'react'
import { useTheme } from './ThemeContext'
import { useUser } from './UserContext'

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { user } = useUser()

  return (
    <nav style={{
      backgroundColor: theme === 'dark' ? '#333' : '#2196f3',
      color: 'white',
      padding: '14px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>MyApp</span>
      <span>Welcome, {user.name} ({user.role})</span>
      <button
        onClick={toggleTheme}
        style={{ padding: '8px 16px', backgroundColor: 'white', color: '#333', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  )
}

function Profile() {
  const { user, setUser } = useUser()
  const { theme } = useTheme()

  const bg = theme === 'dark' ? '#1e1e1e' : '#f9f9f9'
  const color = theme === 'dark' ? '#eee' : '#333'

  return (
    <div style={{ padding: '30px', backgroundColor: bg, color, minHeight: '80vh' }}>
      <h2>User Profile (Context API Demo)</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Current Theme:</strong> {theme}</p>
      <button
        onClick={() => setUser({ name: 'Bob', role: 'Developer' })}
        style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
      >
        Switch to Bob
      </button>
      <button
        onClick={() => setUser({ name: 'Alice', role: 'Admin' })}
        style={{ padding: '10px 20px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Switch to Alice
      </button>
    </div>
  )
}

export { Navbar, Profile }
