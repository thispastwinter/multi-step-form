import { NavLink, useSearchParams } from "react-router-dom"
import { NavItem as NavItemProps } from "../../types/NavItem"
import { useMemo } from "react"
import classNames from "classnames"

export const NavItem = ({ href, id, subTitle, title }: NavItemProps) => {
  const [params] = useSearchParams()
  const isActive = useMemo(() => getIsActive(params), [params])

  return (
    <NavLink to={href}>
      <div className="flex gap-x-4 items-center">
        <div
          className={classNames(
            "border transition-all duration-300 font-bold w-10 h-10 rounded-full flex justify-center items-center",
            {
              "bg-blue-ribbon-100 text-blue-ribbon-500 border-blue-ribbon-100":
                isActive(id),
            },
          )}
        >
          {id}
        </div>
        <div>
          <p className="font-light">{title}</p>
          <p className="text-lg font-bold">{subTitle}</p>
        </div>
      </div>
    </NavLink>
  )
}

const getIsActive = (params: URLSearchParams) => (id: string) => {
  return params.get("step") === id
}
