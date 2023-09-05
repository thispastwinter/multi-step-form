import { useNavigate, useSearchParams } from "react-router-dom"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { FormProvider, useForm } from "react-hook-form"
import { useCallback } from "react"
import { StepThree } from "./StepThree"
import { Frequency } from "../../types/Frequency"
import { Addon } from "../../types/Addon"
import { StepFour } from "./StepFour"
import { Button } from "../Button"

const defaultValues = {
  frequency: "yearly" as keyof Frequency["rates"],
  "1": {
    name: "",
    email: "",
    phone: "",
  },
  "2": {
    planId: "e93abae5-7643-4f2a-8c28-12e6b03ac3fb",
  },
  "3": {
    addonIds: [] as Array<Addon["id"]>,
  },
}

export type FormValues = typeof defaultValues

export const Form = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const methods = useForm({ defaultValues })
  const currentStep = Number(params.get("step"))
  const nextText = currentStep === 4 ? "Confirm" : "Next Step"

  const handleNextClick = useCallback(() => {
    if (currentStep < 4) {
      const nextStep = currentStep + 1
      navigate(`?step=${nextStep}`, { replace: true })
    }
    if (currentStep === 4) {
      methods.handleSubmit(console.log)
    }
  }, [currentStep, navigate])

  const handleBackClick = useCallback(() => {
    if (currentStep > 1) {
      const previousStep = currentStep - 1
      navigate(`?step=${previousStep}`, { replace: true })
    }
  }, [currentStep, navigate])

  return (
    <FormProvider {...methods}>
      <div className="h-full flex flex-col">
        <div className="p-6 md:p-16 flex flex-col w-full flex-grow relative">
          {currentStep === 1 ? (
            <StepOne />
          ) : currentStep === 2 ? (
            <StepTwo />
          ) : currentStep === 3 ? (
            <StepThree />
          ) : currentStep === 4 ? (
            <StepFour />
          ) : null}
        </div>
        <div className="fixed left-0 right-0 bg-white md:bg-none bottom-0 md:relative px-16 p-4 flex justify-between w-full text-white">
          <Button variant="text" onClick={handleBackClick} className="w-32">
            Go Back
          </Button>
          <Button onClick={handleNextClick} className="w-32">
            {nextText}
          </Button>
        </div>
      </div>
    </FormProvider>
  )
}
