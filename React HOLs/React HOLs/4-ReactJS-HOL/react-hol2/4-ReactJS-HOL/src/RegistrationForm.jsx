import React, { useState } from 'react'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    course: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!formData.gender) newErrors.gender = 'Select a gender'
    if (!formData.course) newErrors.course = 'Select a course'
    return newErrors
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', password: '', gender: '', course: '' })
    setErrors({})
    setSubmitted(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '4px',
    marginBottom: '4px',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '15px'
  }

  const errorStyle = { color: 'red', fontSize: '13px', marginBottom: '8px' }

  if (submitted) {
    return (
      <div style={{ maxWidth: '480px', margin: '40px auto', padding: '30px', border: '1px solid #4caf50', borderRadius: '8px', backgroundColor: '#f9fff9' }}>
        <h2 style={{ color: '#4caf50' }}>Registration Successful!</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Course:</strong> {formData.course}</p>
        <button onClick={handleReset} style={{ padding: '10px 20px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Register Again
        </button>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '480px', margin: '40px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input style={inputStyle} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" />
        {errors.name && <p style={errorStyle}>{errors.name}</p>}

        <label>Email</label>
        <input style={inputStyle} type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
        {errors.email && <p style={errorStyle}>{errors.email}</p>}

        <label>Password</label>
        <input style={inputStyle} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
        {errors.password && <p style={errorStyle}>{errors.password}</p>}

        <label>Gender</label>
        <select style={inputStyle} name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p style={errorStyle}>{errors.gender}</p>}

        <label>Course</label>
        <select style={inputStyle} name="course" value={formData.course} onChange={handleChange}>
          <option value="">-- Select Course --</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Data Science">Data Science</option>
        </select>
        {errors.course && <p style={errorStyle}>{errors.course}</p>}

        <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
