import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      logs: ['Component created (constructor)']
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
    this.setState(prev => ({ logs: [...prev.logs, 'componentDidMount - timer started'] }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time.getSeconds() !== this.state.time.getSeconds()) {
      if (this.state.logs.length < 6) {
        this.setState(prev => ({
          logs: [...prev.logs, `componentDidUpdate - ${this.state.time.toLocaleTimeString()}`]
        }))
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <h2>Live Clock (Class Component)</h2>
        <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#2196f3' }}>
          {this.state.time.toLocaleTimeString()}
        </p>
        <p style={{ color: '#666' }}>{this.state.time.toDateString()}</p>
        <div style={{ marginTop: '12px', backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '4px' }}>
          <strong>Lifecycle Logs:</strong>
          {this.state.logs.map((log, i) => (
            <p key={i} style={{ margin: '4px 0', fontSize: '13px', color: '#555' }}>• {log}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default Clock
