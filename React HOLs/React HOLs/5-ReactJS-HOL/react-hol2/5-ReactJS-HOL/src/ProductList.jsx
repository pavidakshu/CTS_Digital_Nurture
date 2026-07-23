import React, { useState } from 'react'

const allProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 75000, inStock: true },
  { id: 2, name: 'Phone', category: 'Electronics', price: 25000, inStock: false },
  { id: 3, name: 'Desk', category: 'Furniture', price: 12000, inStock: true },
  { id: 4, name: 'Chair', category: 'Furniture', price: 8000, inStock: true },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 5000, inStock: false },
  { id: 6, name: 'Bookshelf', category: 'Furniture', price: 9500, inStock: true },
]

function ProductList() {
  const [filter, setFilter] = useState('All')
  const [showInStock, setShowInStock] = useState(false)

  const categories = ['All', 'Electronics', 'Furniture']

  const filtered = allProducts
    .filter(p => filter === 'All' || p.category === filter)
    .filter(p => !showInStock || p.inStock)

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Product List</h1>

      <div style={{ marginBottom: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 16px',
              backgroundColor: filter === cat ? '#2196f3' : '#e0e0e0',
              color: filter === cat ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
        <label style={{ marginLeft: '12px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showInStock}
            onChange={e => setShowInStock(e.target.checked)}
            style={{ marginRight: '6px' }}
          />
          In Stock Only
        </label>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: '#999', fontStyle: 'italic' }}>No products match the selected filters.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={th}>#</th>
              <th style={th}>Name</th>
              <th style={th}>Category</th>
              <th style={th}>Price (₹)</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, idx) => (
              <tr key={p.id} style={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#fafafa' }}>
                <td style={td}>{idx + 1}</td>
                <td style={td}>{p.name}</td>
                <td style={td}>{p.category}</td>
                <td style={td}>₹{p.price.toLocaleString()}</td>
                <td style={td}>
                  <span style={{
                    padding: '3px 10px',
                    borderRadius: '12px',
                    backgroundColor: p.inStock ? '#e8f5e9' : '#ffebee',
                    color: p.inStock ? '#2e7d32' : '#c62828',
                    fontSize: '13px'
                  }}>
                    {p.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p style={{ marginTop: '12px', color: '#666' }}>Showing {filtered.length} of {allProducts.length} products</p>
    </div>
  )
}

const th = { padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }
const td = { padding: '10px 14px', borderBottom: '1px solid #eee' }

export default ProductList
