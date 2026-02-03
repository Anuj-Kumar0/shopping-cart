import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Navbar from '../components/Navbar'

test('shows cart count when items exist', () => {
    render(
        <MemoryRouter>
            <Navbar totalItems={3} />
        </MemoryRouter>
    )

    expect(screen.getByText(/cart \(3\)/i)).toBeInTheDocument()
})

test('does not show cart count when empty', () => {
    render(
        <MemoryRouter>
            <Navbar totalItems={0} />
        </MemoryRouter>
    )

    expect(screen.getByText('Cart')).toBeInTheDocument()
})
