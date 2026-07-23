import { useState } from 'react'
import { Student } from './types'
import StudentCard from './StudentCard'
import AddStudentForm from './AddStudentForm'

const initialStudents: Student[] = [
  { id: 1, name: 'Alice Johnson', age: 21, course: 'Computer Science', marks: 92 },
  { id: 2, name: 'Bob Smith', age: 22, course: 'Data Science', marks: 78 },
  { id: 3, name: 'Carol White', age: 20, course: 'Web Development', marks: 85 },
]

function App() {
  const [students, setStudents] = useState<Student[]>(initialStudents)

  const handleAdd = (data: Omit<Student, 'id'>) => {
    const newStudent: Student = { id: Date.now(), ...data }
    setStudents(prev => [...prev, newStudent])
  }

  const handleDelete = (id: number) => {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const average = students.length > 0
    ? (students.reduce((sum, s) => sum + s.marks, 0) / students.length).toFixed(1)
    : 0

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Student Manager (TypeScript)</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>
        {students.length} students | Average marks: {average}
      </p>
      <AddStudentForm onAdd={handleAdd} />
      {students.length === 0
        ? <p style={{ textAlign: 'center', color: '#999' }}>No students. Add one above.</p>
        : students.map(s => <StudentCard key={s.id} student={s} onDelete={handleDelete} />)
      }
    </div>
  )
}

export default App
