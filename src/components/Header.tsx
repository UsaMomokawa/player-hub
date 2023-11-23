import { twMerge } from "tailwind-merge"
import { MenuButton } from "./MenuButton"
import { BackButton } from "./BackButton"

interface HeaderProps {
  backButton: boolean
  onMenuClick?: () => void
  onBackClick?: () => void
}

export const Header = ({
  backButton = false,
  onMenuClick,
  onBackClick,
}: HeaderProps) => {
  return (
    <header>
      <div
        className={twMerge(
          "flex flex-row-reverse p-6 items-center justify-between",
          "bg-white",
        )}
      >
        <MenuButton onClick={onMenuClick} />
        {backButton && <BackButton onClick={onBackClick} />}
      </div>
    </header>
  )
}
