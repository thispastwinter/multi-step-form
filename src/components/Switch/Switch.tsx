import classNames from "classnames"
import { FC, PropsWithChildren, useCallback } from "react"

interface SwitchProps<T extends string> {
  values: [T, T]
  onToggle: (value: T) => void
  currentValue: T
}

export const Switch = <T extends string>({
  values: [valueOne, valueTwo],
  currentValue,
  onToggle,
}: SwitchProps<T>) => {
  const handleToggle = useCallback(() => {
    if (currentValue === valueOne) {
      onToggle(valueTwo)
    } else {
      onToggle(valueOne)
    }
  }, [onToggle, currentValue, valueOne, valueTwo])

  return (
    <div role="group" className="flex justify-center items-center mt-4">
      <Label isActive={currentValue === valueOne}>{valueOne}</Label>
      <button
        role="switch"
        aria-checked={currentValue === valueTwo}
        onClick={handleToggle}
        tabIndex={1}
        className="w-14 h-7 flex items-center rounded-full mx-3 px-1 bg-green-vogue-950 cursor-pointer"
      >
        <div
          className={classNames(
            "bg-white w-5 h-5 rounded-full shadow-md transition-transform duration-300",
            {
              "translate-x-7": currentValue === valueTwo,
            },
          )}
        ></div>
      </button>
      <Label isActive={currentValue === valueTwo}>{valueTwo}</Label>
    </div>
  )
}

const Label: FC<PropsWithChildren<{ isActive: boolean }>> = ({
  isActive,
  children,
}) => {
  return (
    <span
      className={classNames("font-bold capitalize", {
        "text-gray-chateau-700": !isActive,
      })}
    >
      {children}
    </span>
  )
}
