import classNames from "classnames"
import { ComponentProps, forwardRef } from "react"

type CheckboxProps = ComponentProps<"input">

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className={classNames(
          "rounded-md text-blue-ribbon-500 w-6 h-6  focus:outline-blue-ribbon-500 cursor-pointer",
          props.className,
        )}
      />
    )
  },
)
