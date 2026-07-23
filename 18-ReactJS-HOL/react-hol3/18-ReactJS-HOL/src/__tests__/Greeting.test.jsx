import { render, screen } from '@testing-library/react'
import Greeting from '../Greeting'

describe('Greeting Component', () => {
  test('shows login message when user is not logged in', () => {
    render(<Greeting name="Alice" isLoggedIn={false} />)
    expect(screen.getByText('Please log in to continue.')).toBeInTheDocument()
  })

  test('shows welcome message when user is logged in', () => {
    render(<Greeting name="Alice" isLoggedIn={true} />)
    expect(screen.getByText('Welcome back, Alice!')).toBeInTheDocument()
  })

  test('displays the correct name in welcome message', () => {
    render(<Greeting name="Bob" isLoggedIn={true} />)
    expect(screen.getByText('Welcome back, Bob!')).toBeInTheDocument()
  })
})
