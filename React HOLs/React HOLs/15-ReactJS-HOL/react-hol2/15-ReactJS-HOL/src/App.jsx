import React from 'react'
import { useLocalStorage, useWindowSize, useFetch } from './hooks'

function Notepad() {
  const [note, setNote] = useLocalStorage('my-note', '')
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      <h2>useLocalStorage Hook</h2>
      <p style={{ color: '#666', fontSize: '14px' }}>Note persists across page refreshes</p>
      <textarea
        value={note}
        onChange={e => setNote(e.target.value)}
        rows={4}
        placeholder="Type a note — it will persist after refresh..."
        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', fontSize: '15px' }}
      />
      <button onClick={() => setNote('')} style={{ marginTop: '8px', padding: '6px 14px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Clear
      </button>
    </div>
  )
}

function WindowSizeInfo() {
  const { width, height } = useWindowSize()
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      <h2>useWindowSize Hook</h2>
      <p>Width: <strong>{width}px</strong></p>
      <p>Height: <strong>{height}px</strong></p>
      <p style={{ color: '#666', fontSize: '14px' }}>Resize the browser window to see live updates</p>
    </div>
  )
}

function PostFetcher() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      <h2>useFetch Hook</h2>
      {loading && <p style={{ color: '#2196f3' }}>Fetching posts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && data.map(post => (
        <div key={post.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
          <p style={{ fontWeight: 'bold', margin: '4px 0' }}>{post.title}</p>
          <p style={{ color: '#666', fontSize: '13px', margin: '4px 0' }}>{post.body.substring(0, 80)}...</p>
        </div>
      ))}
    </div>
  )
}

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Custom Hooks Demo</h1>
      <Notepad />
      <WindowSizeInfo />
      <PostFetcher />
    </div>
  )
}

export default App
