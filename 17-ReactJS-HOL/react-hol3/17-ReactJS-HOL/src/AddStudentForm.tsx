import React, { useState } from 'react'
import { AddStudentFormProps } from './types'

function AddStudentForm({ onAdd }: AddStudentFormProps) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [course, setCourse] = useState('')
  const [marks, setMarks] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !age || !course || !marks) return
    onAdd({ name, age: Number(age), course, marks: Number(marks) })
    setName('')
    setAge('')
    setCourse('')
    setMarks('')
  }

  const input: React.CSSProperties = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', marginBottom: '8px' }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
      <h3 style={{ marginTop: 0 }}>Add Student</h3>
      <input style={input} type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input style={input} type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
      <input style={input} type="text" placeholder="Course" value={course} onChange={e => setCourse(e.target.value)} />
      <input style={input} type="number" placeholder="Marks (0-100)" value={marks} onChange={e => setMarks(e.target.value)} min={0} max={100} />
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '15px' }}>
        Add Student
      </button>
    </form>
  )
}

export default AddStudentForm
