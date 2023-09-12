import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Signup from "../../pages/Signup/Signup";
import Checkout from "../../pages/Checkout/Checkout";
import Orders from "../../pages/Orders/Orders";
import Demo from "../../pages/Demo/Demo";
import Login from "../../pages/Home/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Appointment from "../../pages/Appointment/Appointment";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/orders',
            element: <PrivateRoute><Orders/></PrivateRoute>
        },
        {
            path:'/appointment',
            element: <Appointment/>
        },
        {
            path:'/checkout/:id',
            loader: async ({params}) =>{
              return fetch(`http://localhost:5000/services/${params.id}`)
            },
            element: <PrivateRoute><Checkout/></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/demo',
            element:<Demo/>
        },
      ]
    }
  ])

export default router;