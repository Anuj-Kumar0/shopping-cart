import App from "../App";
import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
];

export default routes;
