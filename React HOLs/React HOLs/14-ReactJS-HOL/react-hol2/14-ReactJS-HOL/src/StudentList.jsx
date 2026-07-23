import React, { Component } from 'react'

class StudentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Alice', marks: 88 },
        { id: 2, name: 'Bob', marks: 74 },
        { id: 3, name: 'Carol', marks: 95 },
      ],
      newName: '',
      newMarks: ''
    }
  }

  handleAdd = () => {
    if (!this.state.newName || !this.state.newMarks) return
    const student = {
      id: Date.now(),
      name: this.state.newName,
      marks: Number(this.state.newMarks)
    }
    this.setState(prev => ({
      students: [...prev.students, student],
      newName: '',
      newMarks: ''
    }))
  }

  handleDelete = (id) => {
    this.setState(prev => ({ students: prev.students.filter(s => s.id !== id) }))
  }

  render() {
    const { students, newName, newMarks } = this.state
    return (
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
        <h2>Student List (Class Component)</h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Student name"
            value={newName}
            onChange={e => this.setState({ newName: e.target.value })}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
          />
          <input
            type="number"
            placeholder="Marks"
            value={newMarks}
            onChange={e => this.setState({ newMarks: e.target.value })}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '80px' }}
          />
          <button onClick={this.handleAdd} style={{ padding: '8px 16px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add
          </button>
        </div>
        {students.map(s => (
          <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
            <span>{s.name}</span>
            <span>Marks: <strong>{s.marks}</strong></span>
            <button onClick={() => this.handleDelete(s.id)} style={{ padding: '4px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Remove
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default StudentList
