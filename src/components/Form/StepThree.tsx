import { useFormContext, useWatch } from "react-hook-form"
import { AddonCard } from "../AddonCard"
import { StepHeader } from "./StepHeader"
import { addons } from "./formData/addons"
import { FormValues } from "./Form"

export const StepThree = () => {
  const { register, getValues } = useFormContext<FormValues>()
  const frequency = getValues("frequency")
  useWatch<FormValues>({ name: "3" })

  return (
    <div>
      <StepHeader
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <div className="grid gap-y-4">
        {Object.values(addons).map((addon) => (
          <AddonCard
            key={addon.id}
            addon={addon}
            currentFrequency={frequency}
            {...register("3.addonIds")}
          />
        ))}
      </div>
    </div>
  )
}
