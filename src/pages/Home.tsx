import { Card } from "../components/Card"
import { Form } from "../components/Form"
import { StepIndicator } from "../components/StepIndicator/StepIndicator"

export const Home = () => {
  return (
    <Card className="bg-white z-40 my-36 grid md:grid-flow-col md:grid-cols-[1fr_2fr] w-full md:min-h-[800px] md:w-[1000px] shadow-lg">
      <StepIndicator />
      <Form />
    </Card>
  )
}
