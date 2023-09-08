import { useNavigate, useSearchParams } from "react-router-dom"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { FormProvider, useForm } from "react-hook-form"
import { useCallback, useMemo } from "react"
import { StepThree } from "./StepThree"
import { StepFour } from "./StepFour"
import { Footer } from "./Footer"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormValues, schema } from "./schema"

const defaultValues: FormValues = {
  frequency: "yearly",
  "1": {
    email: "",
    name: "",
    phone: "",
  },
  "2": {
    planId: "e93abae5-7643-4f2a-8c28-12e6b03ac3fb",
  },
  "3": {
    addonIds: [],
  },
}

export const Form = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const methods = useForm({
    defaultValues,
    reValidateMode: "onBlur",
    resolver: zodResolver(schema),
  })
  const currentStep = useMemo(() => Number(params.get("step")), [params])
  const nextText = currentStep === 4 ? "Confirm" : "Next Step"

  const handleNextClick = useCallback(async () => {
    let nextStep = currentStep

    if (currentStep < 4) {
      nextStep += 1
    }

    await methods.handleSubmit(
      (values) => {
        if (currentStep === 4) {
          console.log("VALUES:", values)
          return
        }
        navigate(`?step=${nextStep}`, { replace: true })
      },
      (errors) => {
        const stepKey = String(currentStep) as keyof typeof errors
        if (!errors[stepKey] && currentStep < 4) {
          navigate(`?step=${nextStep}`, { replace: true })
        }
      },
    )()
  }, [currentStep, navigate, methods.handleSubmit])

  const handleBackClick = useCallback(() => {
    let previousStep = currentStep

    if (currentStep > 1) {
      previousStep -= 1
      navigate(`?step=${previousStep}`, { replace: true })
    }
  }, [currentStep, navigate])

  return (
    <FormProvider {...methods}>
      <div className="h-full flex flex-col">
        <div className="p-3 md:p-16 flex flex-col w-full flex-grow relative">
          <StepComponent step={currentStep} />
        </div>
        <Footer
          onBackClick={handleBackClick}
          onNextClick={handleNextClick}
          nextText={nextText}
          backText="Go Back"
          canGoBack={currentStep != 1}
        />
      </div>
    </FormProvider>
  )
}

const StepComponent = ({ step }: { step: number }) => {
  const steps = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
    4: <StepFour />,
  }

  return steps[step as 1 | 2 | 3 | 4]
}
