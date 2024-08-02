import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./pages/Main"
import Login from "./pages/Login"
import Parking from "./pages/Parking"

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
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
