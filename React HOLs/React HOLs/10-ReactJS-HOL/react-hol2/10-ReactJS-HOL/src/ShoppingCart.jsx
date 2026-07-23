import React, { useReducer } from 'react'

const initialState = {
  cart: [],
  total: 0
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.cart.find(item => item.id === action.payload.id)
      if (exists) {
        const updated = state.cart.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        )
        return { ...state, cart: updated, total: state.total + action.payload.price }
      }
      return {
        cart: [...state.cart, { ...action.payload, qty: 1 }],
        total: state.total + action.payload.price
      }
    }
    case 'REMOVE_ITEM': {
      const item = state.cart.find(i => i.id === action.payload.id)
      if (!item) return state
      if (item.qty === 1) {
        return {
          cart: state.cart.filter(i => i.id !== action.payload.id),
          total: state.total - action.payload.price
        }
      }
      return {
        cart: state.cart.map(i => i.id === action.payload.id ? { ...i, qty: i.qty - 1 } : i),
        total: state.total - action.payload.price
      }
    }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}

const products = [
  { id: 1, name: 'React Book', price: 499 },
  { id: 2, name: 'JS Guide', price: 350 },
  { id: 3, name: 'CSS Handbook', price: 275 },
  { id: 4, name: 'Node.js Manual', price: 420 },
]

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>Shopping Cart (useReducer)</h1>

      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '30px' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', width: '140px', textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold' }}>{p.name}</p>
            <p style={{ color: '#4caf50' }}>₹{p.price}</p>
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', payload: p })}
              style={{ padding: '6px 14px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Add
            </button>
          </div>
        ))}
      </div>

      <h2>Cart ({state.cart.reduce((sum, i) => sum + i.qty, 0)} items)</h2>
      {state.cart.length === 0 ? (
        <p style={{ color: '#999' }}>Cart is empty</p>
      ) : (
        <>
          {state.cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
              <span>{item.name}</span>
              <span>₹{item.price} x {item.qty}</span>
              <div>
                <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })} style={smallBtn('#4caf50')}>+</button>
                <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })} style={smallBtn('#f44336')}>-</button>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', fontWeight: 'bold', fontSize: '18px' }}>
            <span>Total:</span>
            <span>₹{state.total}</span>
          </div>
          <button onClick={() => dispatch({ type: 'CLEAR_CART' })} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  )
}

function smallBtn(bg) {
  return { backgroundColor: bg, color: 'white', border: 'none', borderRadius: '4px', padding: '4px 10px', margin: '0 3px', cursor: 'pointer' }
}

export default ShoppingCart
