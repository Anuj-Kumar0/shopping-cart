import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Footer from '../components/Footer'

test('renders footer links', () => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    )

    expect(screen.getByText('ShoppiBuy')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /shop/i })).toHaveAttribute('href', '/shop')
})
