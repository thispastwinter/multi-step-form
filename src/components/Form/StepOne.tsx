import { TextField } from "../TextField"
import { StepHeader } from "./StepHeader"

export const StepOne = () => {
  return (
    <div className="flex flex-col">
      <StepHeader
        title="Personal Info"
        subTitle="Please provide your name, email address, and phone number"
      />
      <div className="grid grid-flow-row gap-y-8 w-full">
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email Address" />
        <TextField name="phone" label="Phone Number" />
      </div>
    </div>
  )
}
