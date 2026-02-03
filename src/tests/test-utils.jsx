import { render } from '@testing-library/react'
import { MemoryRouter, Outlet } from 'react-router'

export function renderWithRouter(ui, { route = '/' } = {}) {
    window.history.pushState({}, 'Test page', route)

    return render(
        <MemoryRouter initialEntries={[route]}>
            {ui}
        </MemoryRouter>
    )
}

export function OutletWrapper({ context }) {
    return <Outlet context={context} />
}
