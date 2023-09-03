import classNames from "classnames"
import { useCallback } from "react"

interface SwitchProps<T extends string> {
  values: [T, T]
  onToggle: (value: T) => void
  currentFrequency: T
}

export const Switch = <T extends string>({
  values,
  currentFrequency,
  onToggle,
}: SwitchProps<T>) => {
  const [valueOne, valueTwo] = values

  const handleToggle = useCallback(() => {
    if (currentFrequency === valueOne) {
      onToggle(valueTwo)
    } else {
      onToggle(valueOne)
    }
  }, [onToggle, currentFrequency, valueOne, valueTwo])

  return (
    <div
      className="flex justify-center items-center mt-4"
      onClick={handleToggle}
    >
      <p className="capitalize">{valueOne}</p>
      <div className="w-14 h-7 flex items-center rounded-full mx-3 px-1 bg-blue-700">
        <div
          className={classNames("bg-white w-5 h-5 rounded-full shadow-md", {
            "translate-x-7": currentFrequency === valueTwo,
          })}
        ></div>
      </div>
      <p className="capitalize">{valueTwo}</p>
    </div>
  )
}
