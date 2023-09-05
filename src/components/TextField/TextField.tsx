import { ComponentProps, forwardRef } from "react"

interface TextFieldProps extends ComponentProps<"input"> {
  name: string
  label: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { label, ...rest } = props

    return (
      <div className="flex flex-col gap-y-3 group">
        <label className="font-bold" htmlFor={rest.name}>
          {label}
        </label>
        <input
          ref={ref}
          className="form-input rounded-md peer hover:border-blue-ribbon-500 focus:border-blue-ribbon-500 outline-none focus:ring-transparent"
          {...rest}
        />
      </div>
    )
  },
)
