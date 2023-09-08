import { useSearchParams } from "react-router-dom"
import { StepItem as StepItemProps } from "../../types/StepItem"
import { FC, useMemo } from "react"
import classNames from "classnames"

export const StepItem: FC<StepItemProps> = ({ id, subTitle, title }) => {
  const [params] = useSearchParams()
  const isActive = useMemo(() => getIsActive(params), [params])

  return (
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
      <div className="hidden md:block">
        <p className="font-light">{title}</p>
        <p className="text-lg font-bold">{subTitle}</p>
      </div>
    </div>
  )
}

const getIsActive = (params: URLSearchParams) => (id: string) => {
  return params.get("step") === id
}
