import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRout from "../component/ProtectedRout/ProtectedRout";
import AddTouristSpot from "../Pages/AddTouristSpot";
import Mylist from "./../Pages/Mylist";

Root;

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
      {
        path: "/addtouristspot",
        element: (
          <ProtectedRout>
            <AddTouristSpot></AddTouristSpot>
          </ProtectedRout>
        ),
      },
      // {
      //   path: "/property/:id",
      //   element: (
      //     <ProtectedRout>
      //       <PropertyDetails></PropertyDetails>
      //     </ProtectedRout>
      //   ),

      // },

      {
        path: "/mylist",
        element: (
          <ProtectedRout>
            <Mylist></Mylist>
          </ProtectedRout>
        ),
      },
    ],
  },
]);
export default router;
