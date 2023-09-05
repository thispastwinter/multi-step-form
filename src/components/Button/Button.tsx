import classNames from "classnames"
import { ComponentProps, FC } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "solid" | "outline" | "text"
}

export const Button: FC<ButtonProps> = ({ variant = "solid", ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(
        "px-6 py-3 rounded-md font-bold border",
        {
          "bg-green-vogue-950 hover:bg-green-vogue-900 border-transparent":
            variant === "solid",
          "text-gray-chateau-700 border-transparent": variant === "text",
          "border border-green-vogue-950": variant === "outline",
        },
        rest.className,
      )}
    />
  )
}
