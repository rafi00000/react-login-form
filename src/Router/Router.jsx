import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Login from "../components/Login_form/Login";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]) ;

export default route;