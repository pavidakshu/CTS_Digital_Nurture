import React from 'react'

function StudentCard({ name, age, course, grade }) {
  return (
    <div style={{
      border: '1px solid #4a90e2',
      borderRadius: '10px',
      padding: '20px',
      margin: '12px auto',
      maxWidth: '360px',
      backgroundColor: '#f0f7ff'
    }}>
      <h3 style={{ color: '#4a90e2', marginBottom: '8px' }}>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  )
}

export default StudentCard
