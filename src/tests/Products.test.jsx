import { renderHook } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import useProducts from '../hooks/products'
import { vi } from 'vitest'

const mockProducts = [
    { id: 1, title: 'Product A', price: 10, image: 'img.jpg' },
    { id: 2, title: 'Product B', price: 20, image: 'img2.jpg' },
]

beforeEach(() => {
    vi.restoreAllMocks()
})

test('fetches products successfully', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: async () => mockProducts,
    })

    const { result } = renderHook(() => useProducts())

    expect(result.current.loading).toBe(true)
    expect(result.current.products).toEqual([])
    expect(result.current.error).toBe(null)

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.products).toEqual(mockProducts)
    expect(result.current.error).toBe(null)
})

test('handles fetch error', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
        ok: false,
        status: 500,
        json: async () => ({}),
    })

    const { result } = renderHook(() => useProducts())

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.products).toEqual([])
    expect(result.current.error).toBe('Failed to fetch products')
})

test('handles network error', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network failed'))

    const { result } = renderHook(() => useProducts())

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.products).toEqual([])
    expect(result.current.error).toBe('Network failed')
})
