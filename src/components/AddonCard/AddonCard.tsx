import { Addon } from "../../types/Addon"
import { Card } from "../Card"
import classNames from "classnames"
import { frequencies } from "../Form/formData/frequencies"
import { Frequency } from "../../types/Frequency"
import { Checkbox } from "../Checkbox"
import { FC } from "react"

interface AddonCardProps extends Addon {
  onClick: () => void
  isChecked: boolean
  currentFrequency: keyof Frequency["rates"]
}

export const AddonCard: FC<AddonCardProps> = ({
  frequencyId,
  currentFrequency,
  isChecked,
  onClick,
  detail,
  name,
}) => {
  const { price } = frequencies[frequencyId].rates[currentFrequency]

  return (
    <Card
      onClick={onClick}
      className={classNames(
        "border hover:border-blue-ribbon-500 cursor-pointer transition-colors duration-300 grid",
        { "border-blue-ribbon-500": isChecked },
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Checkbox checked={isChecked} onChange={onClick} />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-gray-chateau-700 text-xs md:text-base">
              {detail}
            </p>
          </div>
        </div>
        <p className={classNames({ "text-blue-ribbon-500": isChecked })}>
          {price.display}
        </p>
      </div>
    </Card>
  )
}
