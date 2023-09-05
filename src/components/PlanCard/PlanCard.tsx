import classNames from "classnames"
import { Card } from "../Card"
import { Plan } from "../../types/Plan"
import { ReactComponent as advanced } from "../../assets/images/icon-advanced.svg"
import { ReactComponent as arcade } from "../../assets/images/icon-arcade.svg"
import { ReactComponent as pro } from "../../assets/images/icon-pro.svg"
import { frequencies } from "../Form/formData/frequencies"
import { Frequency } from "../../types/Frequency"

const icons = {
  advanced,
  arcade,
  pro,
}

type IconName = keyof typeof icons

interface PlanCardProps extends Plan {
  isSelected: boolean
  currentFrequency: keyof Frequency["rates"]
  onClick: (id: string) => void
}

export const PlanCard = ({
  name,
  id,
  icon,
  isSelected,
  frequencyId,
  currentFrequency,
  onClick,
  ...rest
}: PlanCardProps) => {
  const Icon = getIcon(icon as IconName)
  const { price } = frequencies[frequencyId].rates[currentFrequency]

  return (
    <Card
      {...rest}
      tabIndex={1}
      onKeyDown={(e) => e.key === "Enter" && onClick(id)}
      onClick={() => onClick(id)}
      className={classNames(
        "hover:border-blue-ribbon-500 cursor-pointer transition-colors duration-300 w-full border flex flex-col gap-y-6",
        {
          "border-blue-ribbon-500": isSelected,
        },
      )}
    >
      <Icon fontSize={48} />
      <div>
        <p className="capitalize font-bold">{name}</p>
        <p className="text-gray-chateau-700">{price.display}</p>
      </div>
      {currentFrequency === "yearly" && (
        <p className="text-xs font-bold">2 months free</p>
      )}
    </Card>
  )
}

const getIcon = (name: IconName) => {
  return icons[name]
}
