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
      role="group"
      className="flex justify-center items-center mt-4"
      aria-checked={currentFrequency === valueTwo}
    >
      <span
        className={classNames("capitalize", {
          "font-bold": currentFrequency === valueOne,
        })}
      >
        {valueOne}
      </span>
      <div
        role="switch"
        onClick={handleToggle}
        onKeyDown={(e) => e.key === " " && handleToggle()}
        tabIndex={1}
        className="w-14 h-7 flex items-center rounded-full mx-3 px-1 bg-blue-700 cursor-pointer"
      >
        <div
          className={classNames(
            "bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-300",
            {
              "translate-x-7": currentFrequency === valueTwo,
            },
          )}
        ></div>
      </div>
      <span
        className={classNames("capitalize", {
          "font-bold": currentFrequency === valueTwo,
        })}
      >
        {valueTwo}
      </span>
    </div>
  )
}
