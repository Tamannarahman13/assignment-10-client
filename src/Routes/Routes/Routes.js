import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]) 