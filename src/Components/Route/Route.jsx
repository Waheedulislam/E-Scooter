import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home/Home";
import ProductListing from "../../Pages/Product Listing/ProductListing";
import ProductDetails from "../../Pages/Product Details/ProductDetails";
import Login from "../Loing-Register/Login";
import Register from "../Loing-Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/ProductListing',
                element: <ProductListing />
            },
            {
                path: '/ProductDetails',
                element: <ProductDetails />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);

export default router;