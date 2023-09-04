import { useFormContext } from "react-hook-form"
import { TextField } from "../TextField"
import { StepHeader } from "./StepHeader"

const STEP = 1

export const StepOne = () => {
  const { register } = useFormContext()

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
          {...register(`${STEP}.name`)}
        />
        <TextField
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          label="Email Address"
          {...register(`${STEP}.email`)}
        />
        <TextField
          placeholder="e.g. +1 123 456 7890"
          type="phone"
          label="Phone Number"
          {...register(`${STEP}.phone`)}
        />
      </div>
    </div>
  )
}
