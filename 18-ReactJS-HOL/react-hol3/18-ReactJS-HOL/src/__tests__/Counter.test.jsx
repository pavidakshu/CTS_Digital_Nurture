import { render, screen, fireEvent } from '@testing-library/react'
import Counter from '../Counter'

describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0')
  })

  test('increments count when increment button is clicked', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Increment'))
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 1')
  })

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Decrement'))
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 1')
  })

  test('resets count to 0 when reset button is clicked', () => {
    render(<Counter />)
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Increment'))
    fireEvent.click(screen.getByText('Reset'))
    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0')
  })

  test('renders all three buttons', () => {
    render(<Counter />)
    expect(screen.getByText('Increment')).toBeInTheDocument()
    expect(screen.getByText('Decrement')).toBeInTheDocument()
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })
})
