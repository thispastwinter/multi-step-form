import { FC } from "react"
import { StepItem } from "./StepItem"
import { steps } from "./steps"

export const StepIndicatorMobile: FC = () => {
  return (
    <div className="md:hidden top-0 left-0 absolute w-full h-[300px] bg-sidebar-mobile bg-cover bg-bottom bg-no-repeat">
      <ul className="text-white flex justify-center gap-x-6 px-4 pt-12 uppercase">
        {steps.map((stepItem) => {
          return (
            <li key={stepItem.id}>
              <StepItem {...stepItem} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
