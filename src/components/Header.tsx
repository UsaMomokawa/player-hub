import { twMerge } from "tailwind-merge"
import { BackButton } from "./BackButton"

interface HeaderProps {
  hasBackButton?: boolean
  onBackClick?: () => void
}

export const Header = ({ hasBackButton = false, onBackClick }: HeaderProps) => {
  return (
    <header>
      <div
        className={twMerge(
          "sticky flex flex-row p-6 xl:px-16 items-center justify-between",
          "bg-white",
        )}
      >
        {hasBackButton && <BackButton onClick={onBackClick} />}
      </div>
    </header>
  )
}
