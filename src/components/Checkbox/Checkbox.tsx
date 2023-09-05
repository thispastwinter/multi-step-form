import { ComponentProps, FC } from "react"

type CheckboxProps = ComponentProps<"input">

export const Checkbox: FC<CheckboxProps> = (props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="rounded-md text-blue-ribbon-500 w-6 h-6 mr-6  focus:outline-blue-ribbon-500"
    />
  )
}
