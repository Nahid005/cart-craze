import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import AuthContextProvider from "./context/AuthContextProvider"
import { Toaster } from "react-hot-toast"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "sign-in",
    element: <Signin />
  },
  {
    path: "sign-up",
    element: <Signup />
  }
])


function App() {

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthContextProvider>
  )
}

export default App
