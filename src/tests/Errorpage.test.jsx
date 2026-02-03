import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import ErrorPage from '../components/ErrorPage'

test('renders 404 error page', () => {
    render(
        <MemoryRouter>
            <ErrorPage />
        </MemoryRouter>
    )

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText(/page not found/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /go back home/i }))
        .toHaveAttribute('href', '/')
})
