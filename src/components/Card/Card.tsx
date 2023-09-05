import classNames from "classnames"
import { ComponentProps, FC } from "react"

export type CardProps = ComponentProps<"div">

export const Card: FC<CardProps> = (props) => {
  return (
    <div
      {...props}
      className={classNames("p-4 md:p-6 rounded-lg", props.className)}
    />
  )
}
