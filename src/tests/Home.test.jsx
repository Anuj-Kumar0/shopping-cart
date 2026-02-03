import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Home from '../pages/Home'

test('renders hero content and CTA', () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    )

    expect(screen.getByText(/shop smarter/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /start shopping/i }))
        .toHaveAttribute('href', '/shop')
})
