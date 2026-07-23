import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice', role: 'Admin' })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  return useContext(UserContext)
}

export { UserProvider, useUser }
