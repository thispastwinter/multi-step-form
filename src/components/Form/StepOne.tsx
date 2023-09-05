import { useFormContext } from "react-hook-form"
import { TextField } from "../TextField"
import { StepHeader } from "./StepHeader"
import { FormValues } from "./Form"

export const StepOne = () => {
  const { register } = useFormContext<FormValues>()

  return (
    <div className="flex flex-col">
      <StepHeader
        title="Personal Info"
        subTitle="Please provide your name, email address, and phone number"
      />
      <div className="grid grid-flow-row gap-y-8 w-full">
        <TextField
          placeholder="e.g. Stephen King"
          label="Name"
          {...register("1.name")}
        />
        <TextField
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          label="Email Address"
          {...register("1.email")}
        />
        <TextField
          placeholder="e.g. +1 123 456 7890"
          type="phone"
          label="Phone Number"
          {...register("1.phone")}
        />
      </div>
    </div>
  )
}
