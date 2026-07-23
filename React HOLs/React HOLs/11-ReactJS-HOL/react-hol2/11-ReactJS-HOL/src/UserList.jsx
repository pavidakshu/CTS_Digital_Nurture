import React, { useState, useEffect } from 'react'

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)

  const fetchUsers = () => {
    setLoading(true)
    setError(null)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users')
        return res.json()
      })
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUserById = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setSelectedUser(data))
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Users - Fetch API Demo</h1>

      {loading && <p style={{ color: '#2196f3' }}>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {selectedUser && (
        <div style={{ marginBottom: '20px', padding: '16px', border: '1px solid #4caf50', borderRadius: '8px', backgroundColor: '#f9fff9' }}>
          <h3>Selected: {selectedUser.name}</h3>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>Website:</strong> {selectedUser.website}</p>
          <p><strong>Company:</strong> {selectedUser.company?.name}</p>
          <button onClick={() => setSelectedUser(null)} style={{ padding: '6px 14px', backgroundColor: '#9e9e9e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Close
          </button>
        </div>
      )}

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => fetchUserById(user.id)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
              boxShadow: '1px 1px 4px rgba(0,0,0,0.08)'
            }}
          >
            <h4 style={{ marginBottom: '6px' }}>{user.name}</h4>
            <p style={{ fontSize: '13px', color: '#666' }}>{user.email}</p>
            <p style={{ fontSize: '13px', color: '#666' }}>{user.address?.city}</p>
          </div>
        ))}
      </div>

      <button onClick={fetchUsers} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Refresh
      </button>
    </div>
  )
}

export default UserList
