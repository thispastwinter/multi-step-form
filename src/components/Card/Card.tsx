import { ComponentProps } from "react"

export type CardProps = ComponentProps<"div">

export const Card = (props: CardProps) => {
  const classes = ["p-4 md:p-6 rounded-lg", props.className]
  return <div {...props} className={classes.join(" ")} />
}
