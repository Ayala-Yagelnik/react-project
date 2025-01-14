import { createBrowserRouter } from "react-router";
import About from "./components/about";
import Home from "./components/Home";
import Error from "./components/error";
import AppLayout from "./components/AppLayout";




export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        errorElement:<>  <Error></Error></>,
        children: [
            { path: '/', element: <Home/> },
            { path: 'about', element: <About /> }
           ]
    }
])


