import { twMerge } from "tailwind-merge"
import { BackButton } from "./BackButton"

interface HeaderProps {
  label?: string
  hasBackButton?: boolean
  onBackClick?: () => void
}

export const Header = ({
  label,
  hasBackButton = false,
  onBackClick,
}: HeaderProps) => {
  return (
    <header>
      <div
        className={twMerge(
          "sticky flex flex-row p-6 sm:px-24 items-center justify-between",
          "bg-white",
        )}
      >
        {hasBackButton && <BackButton onClick={onBackClick} />}
        <p className="text-stone-500">{label}</p>
      </div>
    </header>
  )
}
