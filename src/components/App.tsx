import { Route, RouterProvider, Routes } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"
import { Home } from "../pages/Home"

const RootDefault = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

const router = createBrowserRouter([{ path: "*", Component: RootDefault }])

export const App = () => {
  return <RouterProvider router={router} />
}
