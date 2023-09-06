import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { useSearchParams } from "react-router-dom"
import { NavMobile } from "../components/Nav/NavMobile"

export const MainLayout: FC = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.get("step")) {
      return
    }
    navigate("/?step=1")
  }, [])

  return (
    <div className="h-full md:h-[100vh] px-4 flex flex-col justify-center items-center overflow-y-scroll">
      <NavMobile />
      <Outlet />
    </div>
  )
}
