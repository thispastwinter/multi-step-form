import { useFormContext, useWatch } from "react-hook-form"
import { plans } from "./formData/plans"
import { NavLink } from "react-router-dom"
import { StepHeader } from "./StepHeader"
import { addons } from "./formData/addons"
import { useMemo } from "react"
import { Addon } from "../../types/Addon"
import { sum } from "lodash"
import { frequencies } from "./formData/frequencies"
import { FormValues } from "./schema"
import classNames from "classnames"

export const StepFour = () => {
  const methods = useFormContext<FormValues>()
  const values = methods.getValues()
  const {
    frequency,
    "2": { planId },
    "3": { addonIds },
  } = values

  const plan = plans[planId]
  const { price: planPrice } = frequencies[plan.frequencyId].rates[frequency]

  const { addonPrices, addonsList } = useMemo(() => {
    const addonPrices: Array<number> = []
    const addonsList: Array<Addon> = []

    addonIds.forEach((id) => {
      const addon = addons[id]
      addonsList.push(addon)
      addonPrices.push(
        frequencies[addon.frequencyId].rates[frequency].price.value,
      )
    })

    return { addonPrices, addonsList }
  }, [addonIds])

  const totalPrice = useMemo(() => {
    return getTotalPrice(addonPrices, planPrice.value)
  }, [addonPrices, planPrice.value])

  return (
    <div>
      <StepHeader
        title="Finishing Up"
        subTitle="Double-check everything looks OK before confirming"
      />
      <div className="grid gap-y-8 divide-y">
        <div>
          <p className="capitalize font-bold text-lg pb-4">Personal Details</p>
          <div className="grid gap-y-4 text-gray-chateau-700">
            {Object.entries(values["1"]).map(([field, value]) => (
              <div key={field} className="flex justify-between">
                <p className="capitalize">{field}</p>
                <p className={classNames({ "text-red-800": !value })}>
                  {value || "Missing Required Field"}
                </p>
              </div>
            ))}
            <NavLink
              className="underline text-gray-chateau-700 hover:text-blue-ribbon-500"
              to="/?step=1"
            >
              Change
            </NavLink>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8">
          <div className="gap-y-8">
            <p className="capitalize font-bold text-lg">
              {plan.name} ({frequency})
            </p>
            <NavLink
              className="underline text-gray-chateau-700 hover:text-blue-ribbon-500"
              to="/?step=2"
            >
              Change
            </NavLink>
          </div>
          <p className="font-bold text-lg">{planPrice.display}</p>
        </div>
        <div className="grid gap-y-4 pt-8 ">
          <p className="capitalize font-bold text-lg">Add Ons</p>
          {addonsList.map(({ name, frequencyId, id }) => (
            <div
              key={id}
              className="flex justify-between text-gray-chateau-700"
            >
              <p>{name}</p>
              <p>{frequencies[frequencyId].rates[frequency].price.display}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-16 flex justify-between items-center">
        <p className="text-gray-chateau-700">Total</p>
        <p className="font-bold text-xl text-blue-ribbon-500">
          ${totalPrice}/{planPrice.display.split("/")[1]}
        </p>
      </div>
    </div>
  )
}

const getTotalPrice = (addonPrices: Array<number>, planPrice: number) => {
  return sum([...addonPrices, planPrice])
}
