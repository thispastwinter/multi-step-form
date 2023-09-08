import { Addon } from "../../types/Addon"
import { Card } from "../Card"
import { frequencies } from "../Form/formData/frequencies"
import { Frequency } from "../../types/Frequency"
import { Checkbox } from "../Checkbox"
import { ComponentProps, forwardRef, useCallback, useMemo } from "react"
import { useController } from "react-hook-form"
import { xor } from "lodash"

interface AddonCardProps extends ComponentProps<"input"> {
  name: string
  addon: Addon
  currentFrequency: keyof Frequency["rates"]
}

export const AddonCard = forwardRef<HTMLInputElement, AddonCardProps>(
  ({ currentFrequency, addon, ...rest }, ref) => {
    const { field } = useController(rest)
    const { price } = frequencies[addon.frequencyId].rates[currentFrequency]

    const handleChange = useCallback(
      (value: string) => {
        const newValue = xor(field.value, [value])
        field.onChange(newValue)
      },
      [field.onChange, field.value],
    )

    const isChecked = useMemo(
      () => field.value.includes(addon.id),
      [field.value, addon.id],
    )

    return (
      <div className="w-full relative justify-center flex flex-col">
        <Checkbox
          {...field}
          ref={ref}
          className="peer absolute mx-4 md:mx-6"
          checked={isChecked}
          value={addon.id}
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
        <Card
          role="button"
          defaultValue={addon.id}
          onClick={() => handleChange(addon.id)}
          className="border peer-checked:border-blue-ribbon-500 hover:border-blue-ribbon-500 cursor-pointer transition-colors duration-300 grid"
        >
          <div className="flex justify-between items-center ml-10 md:ml-12">
            <div className="flex items-center">
              <div>
                <p className="font-bold">{addon.name}</p>
                <p className="text-gray-chateau-700 text-xs md:text-base">
                  {addon.detail}
                </p>
              </div>
            </div>
            <p>{price.display}</p>
          </div>
        </Card>
      </div>
    )
  },
)
