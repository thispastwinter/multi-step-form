import { FC } from "react"
import { Card } from "../Card"
import { NavItem } from "./NavItem"
import { navItems } from "./navItems"

export const Nav: FC = () => {
  return (
    <Card className="hidden bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat md:flex flex-col h-full w-full">
      <ul className="text-white flex flex-col gap-y-8 p-4 uppercase">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <NavItem {...navItem} />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
