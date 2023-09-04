import { ComponentProps, forwardRef } from "react"

interface TextFieldProps extends ComponentProps<"input"> {
  name: string
  label: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { label, ...rest } = props

    return (
      <div className="flex flex-col gap-y-4">
        <label htmlFor={rest.name}>{label}</label>
        <input ref={ref} className="form-input rounded-md" {...rest} />
      </div>
    )
  },
)
