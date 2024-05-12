import { Router, createBrowserRouter } from "react-router-dom";
import BackTest from "../pages/BackTest";

const router = createBrowserRouter([
    {
        path : '/',
        element: <BackTest />
    }
],{
    basename : process.env.PUBLIC_URL
})

export default router;