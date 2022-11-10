import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Pages/Blogs/Blogs";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import ServiceDetails from "../Components/Pages/Services/ServiceDetails";
import Services from "../Components/Pages/Services/Services";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layout/Main";
import AddService from "./PrivateRoute/AddService";
import MyReview from "./PrivateRoute/MyReview";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routers = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/services', element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services_all')
            },
            {
                path: '/service/:id', element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            },
            {
                path: '/my_review', element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/add_services', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }

        ]
    }
])