import { StudentCardProps } from './types'

function StudentCard({ student, onDelete }: StudentCardProps) {
  const gradeColor = student.marks >= 90 ? '#4caf50' : student.marks >= 75 ? '#2196f3' : student.marks >= 50 ? '#ff9800' : '#f44336'

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <p style={{ margin: '2px 0', fontWeight: 'bold' }}>{student.name}</p>
        <p style={{ margin: '2px 0', color: '#666', fontSize: '13px' }}>Age: {student.age} | Course: {student.course}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontWeight: 'bold', color: gradeColor, fontSize: '18px' }}>{student.marks}</span>
        <button
          onClick={() => onDelete(student.id)}
          style={{ padding: '5px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default StudentCard
