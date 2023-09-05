import { PlanCard } from "../PlanCard"
import { Switch } from "../Switch"
import { StepHeader } from "./StepHeader"
import { useFormContext } from "react-hook-form"
import { plans } from "./formData/plans"
import { FormValues } from "./Form"
import { useCallback } from "react"

export const StepTwo = () => {
  const { setValue, watch } = useFormContext<FormValues>()
  const [frequency, planId] = watch(["frequency", "2.planId"])

  const handlePlanUpdate = useCallback(
    (planId: string) => {
      setValue("2.planId", planId)
    },
    [planId],
  )

  return (
    <div>
      <StepHeader
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing"
      />
      <div className="flex flex-col h-full gap-y-8">
        <div className="flex w-full gap-x-4">
          {Object.values(plans).map((plan) => (
            <PlanCard
              key={plan.name}
              {...plan}
              onClick={handlePlanUpdate}
              isSelected={plan.id === planId}
              currentFrequency={frequency}
            />
          ))}
        </div>
        <div className="flex gap-x-4 justify-center">
          <Switch
            values={["monthly", "yearly"]}
            currentFrequency={frequency}
            onToggle={(frequency) => setValue("frequency", frequency)}
          />
        </div>
      </div>
    </div>
  )
}
