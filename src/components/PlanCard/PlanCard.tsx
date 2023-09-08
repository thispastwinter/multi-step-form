import { Card } from "../Card"
import { Plan } from "../../types/Plan"
import { ReactComponent as advanced } from "../../assets/images/icon-advanced.svg"
import { ReactComponent as arcade } from "../../assets/images/icon-arcade.svg"
import { ReactComponent as pro } from "../../assets/images/icon-pro.svg"
import { frequencies } from "../Form/formData/frequencies"
import { Frequency } from "../../types/Frequency"
import { ComponentProps, FC, forwardRef } from "react"
import { useController } from "react-hook-form"

const icons = {
  advanced,
  arcade,
  pro,
}

type IconName = keyof typeof icons

interface PlanCardProps extends ComponentProps<"input"> {
  name: string
  plan: Plan
  currentFrequency: keyof Frequency["rates"]
}

export const PlanCard = forwardRef<HTMLInputElement, PlanCardProps>(
  ({ plan, currentFrequency, ...rest }, ref) => {
    const Icon = getIcon(plan.icon as IconName)
    const { field } = useController(rest)
    const { price } = frequencies[plan.frequencyId].rates[currentFrequency]

    return (
      <label className="w-full">
        <input
          type="radio"
          className="hidden peer"
          {...field}
          ref={ref}
          checked={field.value === plan.id}
          value={plan.id}
        />
        <Card
          {...rest}
          tabIndex={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              field.onChange(plan.id)
            }
          }}
          className="hover:border-blue-ribbon-500 peer-checked:border-blue-ribbon-500 cursor-pointer transition-colors duration-300 w-full border flex md:flex-col gap-x-4 md:items-start items-center gap-y-3 md:gap-y-6"
        >
          <Icon fontSize={48} />
          <div>
            <p className="capitalize font-bold">{plan.name}</p>
            <p className="text-gray-chateau-700">{price.display}</p>
          </div>
          <div className="flex md:flex-col justify-end w-full">
            {currentFrequency === "yearly" && (
              <p className="text-xs font-bold">2 months free</p>
            )}
          </div>
        </Card>
      </label>
    )
  },
)

const getIcon = (name: IconName) => {
  return icons[name]
}
