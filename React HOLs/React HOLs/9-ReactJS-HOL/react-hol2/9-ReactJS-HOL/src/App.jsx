import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { UserProvider } from './UserContext'
import { Navbar, Profile } from './Components'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Navbar />
        <Profile />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
