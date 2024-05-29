import { createBrowserRouter } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import CheckEmailPage from "../pages/CheckEmailPage"
import CheckPasswordPage from "../pages/CheckPasswordPage"
import MessagePage from "../components/MessagePage"
import App from "../App"
import AuthLayouts from "../layout/AuthLayouts"
import Intro from "../pages/Intro"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: (
          <AuthLayouts>
            <RegisterPage />
          </AuthLayouts>
        ),
      },
      {
        path: "login",
        element: (
          <AuthLayouts>
            <CheckEmailPage />
          </AuthLayouts>
        ),
      },
      {
        path: "password",
        element: (
          <AuthLayouts>
            <CheckPasswordPage />
          </AuthLayouts>
        ),
      },
      {
        // "" =  如果都沒匹配到
        path: "",
        element: <Intro />,
        children: [
          {
            path: ":userId",
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
])

export default router
