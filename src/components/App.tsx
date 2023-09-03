import { Outlet, Route, RouterProvider, Routes } from "react-router"
import { NavItem } from "../types/NavItem"
import { Card } from "./Card"
import { Nav } from "./Nav"
import { createBrowserRouter, useSearchParams } from "react-router-dom"
import { FC, PropsWithChildren } from "react"
import { Form } from "./Form"

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
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Outlet />
    </div>
  )
}

const Main = () => {
  const [params] = useSearchParams()
  return (
    <Card className="bg-white grid grid-flow-col grid-cols-[1fr_2fr] h-[700px] md:w-[1000px] shadow-lg">
      <Nav navItems={navItems} />
      <Form step={params.get("step") as string} />
    </Card>
  )
}

const router = createBrowserRouter([{ path: "*", Component: RootDefault }])

export const App = () => {
  return <RouterProvider router={router} />
}
