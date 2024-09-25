import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Homepage } from "../pages/Homepage"
import { Munich } from "../pages/Munich"
import { Fussen } from "../pages/Fussen"
import { Zurich } from "../pages/Zurich"
import { Innsbruck } from "../pages/Innsbruck"
import { Salzburg } from "../pages/Salzburg"
import { Vienna } from "../pages/Vienna"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "munich", element: <Munich /> },
      { path: "fussen", element: <Fussen /> },
      { path: "zurich", element: <Zurich /> },
      { path: "innsbruck", element: <Innsbruck /> },
      { path: "salzburg", element: <Salzburg /> },
      { path: "vienna", element: <Vienna /> },
    ],
  },
])
