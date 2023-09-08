import { PlanCard } from "../PlanCard"
import { Switch } from "../Switch"
import { StepHeader } from "./StepHeader"
import { useFormContext, useWatch } from "react-hook-form"
import { plans } from "./formData/plans"
import { FormValues } from "./schema"

export const StepTwo = () => {
  const { setValue, register, getValues } = useFormContext<FormValues>()
  const frequency = getValues("frequency")
  useWatch<FormValues>({ name: "frequency" })
  useWatch<FormValues>({ name: "2" })

  return (
    <div>
      <StepHeader
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing"
      />
      <div className="flex flex-col h-full gap-y-8">
        <div className="flex flex-col md:flex-row w-full gap-4">
          {Object.values(plans).map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              currentFrequency={frequency}
              {...register("2.planId")}
            />
          ))}
        </div>
        <div className="flex gap-x-4 justify-center">
          <Switch
            values={["monthly", "yearly"]}
            currentValue={frequency}
            onToggle={(frequency) => setValue("frequency", frequency)}
          />
        </div>
      </div>
    </div>
  )
}
