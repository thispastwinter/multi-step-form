import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"

interface FormProps {
  step: string
}

export const Form = ({ step }: FormProps) => {
  return (
    <div className="m-24">
      {step === "1" ? <StepOne /> : step === "2" ? <StepTwo /> : null}
    </div>
  )
}
