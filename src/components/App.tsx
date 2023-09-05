import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router"
import { NavItem } from "../types/NavItem"
import { Card } from "./Card"
import { Nav } from "./Nav"
import { createBrowserRouter } from "react-router-dom"
import { FC, PropsWithChildren, useEffect } from "react"
import { Form } from "./Form"
import { NavMobile } from "./Nav/NavMobile"

const navItems: Array<NavItem> = [
  { href: "/?step=1", id: "1", subTitle: "Your Info", title: "Step 1" },
  { href: "/?step=2", id: "2", subTitle: "Select Plan", title: "Step 2" },
  { href: "/?step=3", id: "3", subTitle: "Add-Ons", title: "Step 3" },
  { href: "/?step=4", id: "4", subTitle: "Summary", title: "Step 4" },
]

const RootDefault = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}

const MainLayout: FC<PropsWithChildren> = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/?step=1")
  }, [])

  return (
    <div className="md:h-[100vh] mx-4 flex items-center justify-center">
      <NavMobile navItems={navItems} />
      <Outlet />
    </div>
  )
}

const Main = () => {
  return (
    <Card className="bg-white z-40 mt-36 md:mt-0 grid md:grid-flow-col md:grid-cols-[1fr_2fr] w-full md:h-[800px] md:w-[1000px] shadow-lg">
      <Nav navItems={navItems} />
      <Form />
    </Card>
  )
}

const router = createBrowserRouter([{ path: "*", Component: RootDefault }])

export const App = () => {
  return <RouterProvider router={router} />
}
