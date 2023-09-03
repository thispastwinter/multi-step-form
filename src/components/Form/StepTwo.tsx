import { useState } from "react"
import { PlanCard } from "../PlanCard"
import { Switch } from "../Switch"
import { ReactComponent as Arcade } from "../../assets/images/icon-arcade.svg"
import { ReactComponent as Advanced } from "../../assets/images/icon-advanced.svg"
import { ReactComponent as Pro } from "../../assets/images/icon-pro.svg"
import { StepHeader } from "./StepHeader"
import classNames from "classnames"

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
  const [frequency, setFrequency] = useState<"yearly" | "monthly">("yearly")
  const [planName, setPlanName] = useState<Plan["name"]>("Advanced")

  return (
    <div>
      <StepHeader
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing"
      />
      <div className="flex flex-col h-full gap-y-8">
        <div className="flex w-full gap-x-6">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
              frequency={frequency}
              onClick={() => setPlanName(plan.name)}
              className={classNames("hover:border-blue-600 cursor-pointer", {
                "border-blue-600": plan.name === planName,
              })}
            />
          ))}
        </div>
        <div className="flex gap-x-4 justify-center">
          <Switch
            values={["monthly", "yearly"]}
            currentFrequency={frequency}
            onToggle={setFrequency}
          />
        </div>
      </div>
    </div>
  )
}
