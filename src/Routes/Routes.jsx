import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



Root

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        // {
        //   path: "/about",
        //   element: (
        //     <ProtectedRout>
        //       <About></About>
        //     </ProtectedRout>
        //   ),
        // },
        // {
        //   path: "/property/:id",
        //   element: (
        //     <ProtectedRout>
        //       <PropertyDetails></PropertyDetails>
        //     </ProtectedRout>
        //   ),
          
        // },
      
        // {
        //   path: "/profile",
        //   element: <Profile></Profile>,
        // },
      ],
    },
  ]);
  export default router;