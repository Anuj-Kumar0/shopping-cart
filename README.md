Shopping Cart Application:


Live Links:
Cloudflare Pages - https://shopping-cart-5ue.pages.dev
Netlify - https://shoppibuy.netlify.app/
Vercel - https://shopping-cart-nu-virid-90.vercel.app/

1. Overview

This project is a fully functional shopping cart application. It simulates a real-world e-commerce flow where users can browse products, view product details, add items to a cart, update quantities, and manage their selections across routes.

The application focuses on proper state management, component structure, routing, and testing in a modern React environment.

2. Features

2.a. Browse a list of products fetched from an external API
2.b. View individual product details on a dedicated route
2.c. Add products to the shopping cart
2.d. Increase or decrease product quantities inside the cart
2.e. Remove products from the cart
2.f. Persist cart state while navigating between pages
2.g. Display total items and total price dynamically
2.h. Responsive and clean UI styling

3. Technologies Used

3.a. React for building the user interface
3.b. React Router for client-side routing and navigation
3.c. FakeStore API for fetching product data
3.d. CSS Modules for scoped and maintainable styling
3.e. Vitest for unit and component testing
3.f. Lucide React for icons
3.g. Modern JavaScript (ES6+)
3.h. Vite for fast development and build tooling

4. Project Structure

4.a. Components (ErrorPage, Footer, Navbar, Routes) are separated by responsibility to improve readability and reusability
4.b. Pages are organized by route (Home, Shop, Cart, Checkout)
4.c. Shared state is lifted appropriately to avoid unnecessary prop drilling
4.d. Styling is modularized using CSS Modules to prevent global conflicts
4.e. Products are fetched and transformed into a custom hook (useProducts)

5. Routing Logic

5.a. The application uses React Router to handle multiple pages
5.b. Navigation between shop, cart, and home pages does not reset cart state
5.c. Dynamic routes are used for individual product pages

6. State Management

6.a. Cart state is managed at a high enough level to remain consistent across routes
6.b. Product quantities and totals update immediately on user interaction
6.c. Derived values such as total price are calculated dynamically

7. Testing

7.a. Unit tests are written using Vitest
7.b. Components are tested to ensure correct rendering and behavior
7.c. Cart logic is verified to prevent regressions when updating quantities or removing items

8. Learning Outcomes

8.a. Improved understanding of React component architecture
8.b. Practical experience with React Router and dynamic routes
8.c. Better handling of shared state in a React application
8.d. Writing and maintaining tests for React components
8.e. Working with third-party APIs in a production-like setup

9. Future Improvements

9.a. Add persistent cart storage using localStorage
9.b. Improve accessibility and keyboard navigation

Live Links:
Cloudflare Pages - https://shopping-cart-5ue.pages.dev
Netlify - https://shoppibuy.netlify.app/
Vercel - https://shopping-cart-nu-virid-90.vercel.app/
