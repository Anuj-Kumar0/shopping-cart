import { render, screen, fireEvent } from '@testing-library/react'
import Shop from '../pages/Shop'
import { OutletWrapper } from '../tests/test-utils'
import { MemoryRouter, Routes, Route } from 'react-router'
import { vi } from 'vitest'

const products = [
    { id: 1, title: 'Product A', price: 10, image: 'img.jpg' },
]

test('shows loading state', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route
                    element={<OutletWrapper context={{ loading: true }} />}
                >
                    <Route index element={<Shop />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    expect(screen.getByText(/loading products/i)).toBeInTheDocument()
})

test('adds product to cart', () => {
    const setCartItems = vi.fn()

    render(
        <MemoryRouter>
            <Routes>
                <Route
                    element={
                        <OutletWrapper
                            context={{
                                products,
                                loading: false,
                                error: null,
                                setCartItems,
                            }}
                        />
                    }
                >
                    <Route index element={<Shop />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    fireEvent.click(screen.getByText(/add to cart/i))
    expect(setCartItems).toHaveBeenCalled()
})
