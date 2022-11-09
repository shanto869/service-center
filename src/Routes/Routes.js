import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Services from "../Components/Pages/Services/Services";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
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
            }

        ]
    }
])