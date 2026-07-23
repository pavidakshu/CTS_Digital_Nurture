import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          border: '2px solid #f44336',
          borderRadius: '8px',
          padding: '24px',
          backgroundColor: '#fff5f5',
          margin: '10px'
        }}>
          <h2 style={{ color: '#f44336' }}>Something went wrong</h2>
          <p style={{ color: '#666' }}>{this.state.error && this.state.error.toString()}</p>
          <button
            onClick={this.handleReset}
            style={{ padding: '8px 18px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Try Again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
