import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Parking from "./pages/Parking"
import Registration from "./pages/Registration"
import Profile from "./pages/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/parking",
    element: <Parking />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
