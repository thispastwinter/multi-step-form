import { ComponentProps } from "react"

interface TextFieldProps extends ComponentProps<"input"> {
  name: string
  label: string
}

export const TextField = (props: TextFieldProps) => {
  const { label, ...rest } = props

  return (
    <div className="flex flex-col gap-y-4">
      <label htmlFor={rest.name}>{label}</label>
      <input className="form-input rounded-md" {...rest} />
    </div>
  )
}
