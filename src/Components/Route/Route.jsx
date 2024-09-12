import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import Home from "../../Pages/Home/Home";
import ProductListing from "../../Pages/Product Listing/ProductListing";
import ProductDetails from "../../Pages/Product Details/ProductDetails";
import Login from "../Loing-Register/Login";
import Register from "../Loing-Register/Register";
import DashboardLayout from "../../Layouts/DashboardLayout";
import DashboardHome from "../../Pages/DashboardPages/DashboardHome";
import UserHome from "../../Pages/DashboardPages/User/UserHome";
import AddReview from "../../Pages/DashboardPages/User/AddReview";
import PaymentHistory from "../../Pages/DashboardPages/User/PaymentHistory";
import Reservation from "../../Pages/DashboardPages/User/Reservation";
import UserBooking from "../../Pages/DashboardPages/User/UserBooking";
import UserCart from "../../Pages/DashboardPages/User/UserCart";
import PrivateRoute from "./PrivateRoute";
import DashboardContact from "../../Pages/DashboardPages/DashboardContact";
import DashboardMenu from "../../Pages/DashboardPages/DashboardMenu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
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
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>,
        children: [
            /////// Public Route /////////
            {
                path: 'dashboardHome',
                element: <DashboardHome />

            },
            /////// Admin Route /////////

            /////// User Route /////////
            {
                path: 'user-home',
                element: <UserHome></UserHome>
            },
            {
                path: 'user-review',
                element: <AddReview />
            },
            {
                path: 'user-payment',
                element: <PaymentHistory />
            },
            {
                path: 'user-reservation',
                element: <Reservation />
            },
            {
                path: 'user-booking',
                element: <UserBooking />
            },
            {
                path: 'user-cart',
                element: <UserCart />
            },
            /////// Public Route /////////
            {
                path: 'Contact',
                element: <DashboardContact />
            },
            {
                path: 'Menu',
                element: <DashboardMenu />
            },
        ]


    }
]);

export default router;