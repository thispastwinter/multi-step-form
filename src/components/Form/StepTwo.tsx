import { PlanCard } from "../PlanCard"
import { Switch } from "../Switch"
import { StepHeader } from "./StepHeader"
import { useFormContext, useWatch } from "react-hook-form"
import { plans } from "./formData/plans"
import { FormValues } from "./Form"
import { useCallback } from "react"

export const StepTwo = () => {
  const { setValue, getValues } = useFormContext<FormValues>()
  const frequency = getValues("frequency")
  const planId = getValues("2.planId")
  useWatch<FormValues>({ name: "frequency" })
  useWatch<FormValues>({ name: "2.planId" })

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
        <div className="flex flex-col md:flex-row w-full gap-4">
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
