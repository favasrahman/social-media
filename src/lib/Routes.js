import Login from "components/auth/Login";
import Signup from "components/auth/Signup";
// import Feed from "components/feed/Feed";
import Layout from "components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = '/';
export const LOGIN = '/login';
export const SIGNUP = '/signup'

export const PROTECTED = '/protected'
export const FEED = '/protected/feed'

export const router = createBrowserRouter([
    { path: ROOT, element: <Login />},
    { path: LOGIN, element: <Login />},
    { path: SIGNUP, element: <Signup />},
    { path: PROTECTED, element: <Layout />, children: [
        {
            path: FEED,
            element: 'Feed'
        }
    ]}
] )