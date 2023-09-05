import { NavItem as NavItemProps } from "../../types/NavItem"
import { Card } from "../Card"
import { NavItem } from "./NavItem"

interface NavProps {
  navItems: Array<NavItemProps>
}

export const Nav = ({ navItems }: NavProps) => {
  return (
    <Card className="bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat flex flex-col h-full w-full">
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
