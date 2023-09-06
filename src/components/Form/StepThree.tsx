import { useFormContext, useWatch } from "react-hook-form"
import { Addon } from "../../types/Addon"
import { AddonCard } from "../AddonCard"
import { StepHeader } from "./StepHeader"
import { xor } from "lodash"
import { useCallback } from "react"
import { addons } from "./formData/addons"
import { FormValues } from "./Form"

export const StepThree = () => {
  const { setValue, getValues } = useFormContext<FormValues>()
  const frequency = getValues("frequency")
  const addonIds = getValues("3.addonIds")
  useWatch<FormValues>({ name: "frequency" })
  useWatch<FormValues>({ name: "3.addonIds" })

  const handleAddonClick = useCallback(
    (id: Addon["id"]) => {
      setValue("3.addonIds", xor(addonIds, [id]))
    },
    [addonIds, setValue],
  )

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
            {...addon}
            isChecked={addonIds.includes(addon.id)}
            onClick={() => handleAddonClick(addon.id)}
            currentFrequency={frequency}
          />
        ))}
      </div>
    </div>
  )
}
