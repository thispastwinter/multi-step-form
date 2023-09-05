import { Addon } from "../../types/Addon"
import { Card } from "../Card"
import classNames from "classnames"
import { frequencies } from "../Form/formData/frequencies"
import { Frequency } from "../../types/Frequency"

interface AddonCardProps extends Addon {
  onClick: () => void
  isChecked: boolean
  currentFrequency: keyof Frequency["rates"]
}

export const AddonCard = (props: AddonCardProps) => {
  const { price } = frequencies[props.frequencyId].rates[props.currentFrequency]

  return (
    <Card
      onClick={props.onClick}
      className={classNames(
        "border hover:border-blue-ribbon-500 cursor-pointer transition-colors duration-300 grid",
        { "border-blue-ribbon-500": props.isChecked },
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={props.isChecked}
            onChange={props.onClick}
            className="rounded-md text-blue-ribbon-500 w-6 h-6 mr-6  focus:outline-blue-ribbon-500"
          />
          <div>
            <p className="font-bold">{props.name}</p>
            <p className="text-gray-chateau-700 text-xs md:text-base">
              {props.detail}
            </p>
          </div>
        </div>
        <p className={classNames({ "text-blue-ribbon-500": props.isChecked })}>
          {price.display}
        </p>
      </div>
    </Card>
  )
}
