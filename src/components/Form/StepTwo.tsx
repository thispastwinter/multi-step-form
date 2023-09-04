import { PlanCard } from "../PlanCard"
import { Switch } from "../Switch"
import { ReactComponent as Arcade } from "../../assets/images/icon-arcade.svg"
import { ReactComponent as Advanced } from "../../assets/images/icon-advanced.svg"
import { ReactComponent as Pro } from "../../assets/images/icon-pro.svg"
import { StepHeader } from "./StepHeader"
import classNames from "classnames"
import { useFormContext } from "react-hook-form"

const STEP = 2

const FREQUENCY = `${STEP}.frequency`
const PLAN = `${STEP}.plan`

type Plan = {
  name: string
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  price: {
    monthly: string
    yearly: string
  }
}

const plans: Array<Plan> = [
  {
    name: "Arcade",
    icon: Arcade,
    price: { monthly: "$9/mo", yearly: "$90/yr" },
  },
  {
    name: "Advanced",
    icon: Advanced,
    price: { monthly: "$12/mo", yearly: "$120/yr" },
  },
  { name: "Pro", icon: Pro, price: { monthly: "$15/mo", yearly: "$150/yr" } },
]

export const StepTwo = () => {
  const { setValue, watch } = useFormContext()
  const [frequencyVal, planVal] = watch([FREQUENCY, PLAN])

  const handlePlanUpdate = (planName: string) => {
    setValue(PLAN, planName)
  }

  return (
    <div>
      <StepHeader
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing"
      />
      <div className="flex flex-col h-full gap-y-8">
        <div className="flex w-full gap-x-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
              frequency={frequencyVal}
              onClick={() => handlePlanUpdate(plan.name)}
              onKeyDown={(e) =>
                e.key === "Enter" && handlePlanUpdate(plan.name)
              }
              className={classNames(
                "hover:border-blue-600 cursor-pointer transition-colors duration-300",
                {
                  "border-blue-600": plan.name === planVal,
                },
              )}
            />
          ))}
        </div>
        <div className="flex gap-x-4 justify-center">
          <Switch
            values={["monthly", "yearly"]}
            currentFrequency={frequencyVal}
            onToggle={(frequency) => setValue(FREQUENCY, frequency)}
          />
        </div>
      </div>
    </div>
  )
}
