import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from "vitest";
import Cart from '../pages/Cart'
import { OutletWrapper } from '../tests/test-utils'
import { MemoryRouter, Routes, Route } from 'react-router'
import { vi } from 'vitest'

test('shows empty cart message', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route element={<OutletWrapper context={{ cartItems: [] }} />}>
                    <Route index element={<Cart />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
})

test('removes item from cart', () => {
    const setCartItems = vi.fn()

    render(
        <MemoryRouter>
            <Routes>
                <Route
                    element={
                        <OutletWrapper
                            context={{
                                cartItems: [
                                    { id: 1, title: 'Item', price: 10, quantity: 1, image: '' },
                                ],
                                setCartItems,
                            }}
                        />
                    }
                >
                    <Route index element={<Cart />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )

    fireEvent.click(screen.getByText('✕'))
    expect(setCartItems).toHaveBeenCalled()
})
