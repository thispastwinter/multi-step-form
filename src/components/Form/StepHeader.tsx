interface StepHeaderProps {
  title: string
  subTitle: string
}

export const StepHeader = ({ title, subTitle }: StepHeaderProps) => {
  return (
    <div className="flex flex-col gap-y-4 mb-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h4>{subTitle}</h4>
    </div>
  )
}
