
import Deshboard from "../Deshboard/Deshboard";
import Addmin_appointment from "../Pages/Addmin_appointment/Addmin_appointment";
import Add_doctor from "../Pages/Add_doctor/Add_doctor";
import AppointmentHome from "../Pages/Appointment/AppointmentHome";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import Manage_doctor from "../Pages/Manage_doctor/Manage_doctor";
import Payment from "../Pages/Payment/Payment";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: "/appointment",
                element: <PrivateRoute><AppointmentHome /></PrivateRoute>
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },

        ]
    },
    {
        path: "/deshboard",
        element: <PrivateRoute><Deshboard /></PrivateRoute>,
        children: [
            {
                path: "/deshboard",
                element: <Addmin_appointment />
            },
            {
                path: "/deshboard/adddoctors",
                element: <Add_doctor />
            },
            {
                path: "/deshboard/addminappointment",
                element: <Addmin_appointment />
            },
            {
                path: "/deshboard/manage_doctor",
                element: <Manage_doctor />
            },
            {
                path: "/deshboard/payment/:id",
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${ params.id }`)
            },
        ]
    }
])

export default router