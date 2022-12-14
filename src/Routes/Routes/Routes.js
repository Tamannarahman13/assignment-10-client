import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetail from "../../Pages/CourseDetail/CourseDetail";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-steel.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><CourseDetail></CourseDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-steel.vercel.app/courses/${params.id}`)
            }

        ]
    }
]) 