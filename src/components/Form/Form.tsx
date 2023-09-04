import { useNavigate, useSearchParams } from "react-router-dom"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { FormProvider, useForm } from "react-hook-form"
import { useCallback } from "react"

const defaultValues = {
  "1": {
    name: "",
    email: "",
    phone: "",
  },
  2: {
    plan: "Advanced",
    frequency: "yearly",
  },
}

export const Form = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const currentStep = params.get("step") as string
  const methods = useForm({ defaultValues })

  const nextText = Number(currentStep) === 4 ? "Confirm" : "Next Step"

  const handleNextClick = useCallback(() => {
    if (Number(currentStep) < 4) {
      const nextStep = Number(currentStep) + 1
      navigate(`?step=${nextStep}`, { replace: true })
    }
  }, [currentStep, navigate])

  const handleBackClick = useCallback(() => {
    if (Number(currentStep) > 1) {
      const previousStep = Number(currentStep) - 1
      navigate(`?step=${previousStep}`, { replace: true })
    }
  }, [currentStep, navigate])

  return (
    <FormProvider {...methods}>
      <form
        className="h-full flex flex-col"
        onSubmit={methods.handleSubmit(console.log)}
      >
        <div className="p-16 flex flex-col w-full flex-grow relative">
          {currentStep === "1" ? (
            <StepOne />
          ) : currentStep === "2" ? (
            <StepTwo />
          ) : null}
        </div>
        <div className="px-16 pb-4 flex justify-between w-full text-white">
          <button onClick={handleBackClick} className="text-blue-600 px-6 w-32">
            Go Back
          </button>
          <button
            onClick={handleNextClick}
            className="bg-blue-600 px-6 py-3 rounded-md w-32"
          >
            {nextText}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
