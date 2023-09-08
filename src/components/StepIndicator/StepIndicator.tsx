import { FC } from "react"
import { Card } from "../Card"
import { StepItem } from "./StepItem"
import { steps } from "./steps"

export const StepIndicator: FC = () => {
  return (
    <Card className="hidden bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat md:flex flex-col h-full w-full">
      <ul className="text-white flex flex-col gap-y-8 p-4 uppercase">
        {steps.map((stepItem) => {
          return (
            <li key={stepItem.id}>
              <StepItem {...stepItem} />
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
