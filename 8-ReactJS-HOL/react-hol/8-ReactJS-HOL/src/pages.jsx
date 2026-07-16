import React from 'react'

export function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to Home Page</h1>
      <p>This is the home page of the React Router demo application.</p>
    </div>
  )
}

export function About() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>About Us</h1>
      <p>This is the about page. React Router handles navigation between pages.</p>
    </div>
  )
}

export function Contact() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  )
}

export function NotFound() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  )
}
