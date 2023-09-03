import classNames from "classnames"
import { Card, CardProps } from "../Card"

interface PlanCardProps extends CardProps {
  name: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  price: {
    monthly: string
    yearly: string
  }
  frequency: "monthly" | "yearly"
}

export const PlanCard = ({
  name,
  price,
  frequency,
  icon: Icon,
  ...rest
}: PlanCardProps) => {
  return (
    <Card
      {...rest}
      className={classNames(
        "w-full border flex flex-col gap-y-6",
        rest.className,
      )}
    >
      <Icon fontSize={48} />
      <div>
        <p className="capitalize font-bold">{name}</p>
        <p>{price[frequency]}</p>
      </div>
      {frequency === "yearly" && (
        <p className="text-xs font-bold">2 months free</p>
      )}
    </Card>
  )
}
