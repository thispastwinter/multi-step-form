import { NavLink, useSearchParams } from "react-router-dom"
import { NavItem } from "../../types/NavItem"
import { Card } from "../Card"
import { useMemo } from "react"

interface NavProps {
  navItems: Array<NavItem>
}

export const Nav = ({ navItems }: NavProps) => {
  const [params] = useSearchParams()
  const isActive = useMemo(() => getIsActive(params), [params])

  return (
    <Card className="bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat flex flex-col h-full w-full">
      <ul className="text-white flex flex-col gap-y-8 p-4 uppercase">
        {navItems.map((navItem) => {
          const stepClasses = [
            "border transition-all duration-300 font-bold w-10 h-10 rounded-full flex justify-center items-center",
            isActive(navItem.id) &&
              "bg-[#BEE1FD] text-[#483EFF] border-[#BEE1FD]",
          ]
          return (
            <li key={navItem.id}>
              <NavLink to={navItem.href}>
                <div className="flex gap-x-4 items-center">
                  <div className={stepClasses.join(" ")}>{navItem.id}</div>
                  <div>
                    <p className="font-light">{navItem.title}</p>
                    <p className="text-lg font-bold">{navItem.subTitle}</p>
                  </div>
                </div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

const getIsActive = (params: URLSearchParams) => (id: string) => {
  return params.get("step") === id
}
