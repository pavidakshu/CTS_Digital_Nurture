import React from 'react'
import StudentCard from './StudentCard'

const students = [
  { id: 1, name: 'Alice Johnson', age: 21, course: 'Computer Science', grade: 'A' },
  { id: 2, name: 'Bob Smith', age: 22, course: 'Information Technology', grade: 'B+' },
  { id: 3, name: 'Carol Williams', age: 20, course: 'Data Science', grade: 'A+' },
]

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Student List - Props Demo</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Passing data to components using props</p>
      {students.map(student => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
          grade={student.grade}
        />
      ))}
    </div>
  )
}

export default App
