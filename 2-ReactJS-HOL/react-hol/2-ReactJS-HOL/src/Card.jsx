import React from 'react'

function Card({ title, description }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      width: '200px',
      display: 'inline-block',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
