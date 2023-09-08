import { ComponentProps, forwardRef } from "react"
import { useController } from "react-hook-form"

interface TextFieldProps extends ComponentProps<"input"> {
  name: string
  label: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      field,
      fieldState: { error },
    } = useController(props)
    const { label, ...rest } = props

    return (
      <div className="flex flex-col gap-y-3 group">
        <label className="font-bold" htmlFor={rest.name}>
          {label}
        </label>
        <input
          className="form-input rounded-md peer hover:border-blue-ribbon-500 focus:border-blue-ribbon-500 outline-none focus:ring-transparent"
          {...rest}
          {...field}
          ref={ref}
        />
        {error && <p className="text-red-800">{error.message}</p>}
      </div>
    )
  },
)
