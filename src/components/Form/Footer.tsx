import { FC } from "react"
import { Button } from "../Button"
import classNames from "classnames"

interface FooterProps {
  onBackClick: () => void
  onNextClick: () => void
  backText: string
  nextText: string
  canGoBack: boolean
}

export const Footer: FC<FooterProps> = ({
  onBackClick,
  onNextClick,
  backText,
  nextText,
  canGoBack,
}) => {
  return (
    <div className="fixed left-0 right-0 bg-white md:bg-none bottom-0 md:relative md:px-16 px-8 py-4 flex justify-between w-full text-white">
      {canGoBack && (
        <Button variant="text" onClick={onBackClick} className="w-32">
          {backText}
        </Button>
      )}
      <Button
        onClick={onNextClick}
        className={classNames("w-32 ml-auto", {
          "bg-blue-ribbon-500 hover:bg-blue-ribbon-400":
            nextText.toLowerCase() === "confirm",
        })}
      >
        {nextText}
      </Button>
    </div>
  )
}
