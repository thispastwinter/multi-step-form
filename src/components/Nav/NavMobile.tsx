import { NavItem as NavItemProps } from "../../types/NavItem"
import { NavItem } from "./NavItem"

interface NavProps {
  navItems: Array<NavItemProps>
}

export const NavMobile = ({ navItems }: NavProps) => {
  return (
    <div className="md:hidden top-0 left-0 absolute w-full h-[300px] bg-sidebar-mobile bg-cover bg-bottom bg-no-repeat">
      <ul className="text-white flex justify-center gap-x-6 px-4 pt-12 uppercase">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <NavItem {...navItem} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
