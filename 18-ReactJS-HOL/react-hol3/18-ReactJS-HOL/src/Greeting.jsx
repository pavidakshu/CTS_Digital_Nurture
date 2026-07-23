import React from 'react'

function Greeting({ name, isLoggedIn }) {
  if (!isLoggedIn) {
    return <p>Please log in to continue.</p>
  }
  return <h2>Welcome back, {name}!</h2>
}

export default Greeting
