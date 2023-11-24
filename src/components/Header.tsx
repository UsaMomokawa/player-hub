import { twMerge } from "tailwind-merge"
import { MenuButton } from "./MenuButton"
import { BackButton } from "./BackButton"

interface HeaderProps {
  hasBackButton?: boolean
  onMenuClick?: () => void
  onBackClick?: () => void
}

export const Header = ({
  hasBackButton = false,
  onMenuClick,
  onBackClick,
}: HeaderProps) => {
  return (
    <header>
      <div
        className={twMerge(
          "sticky flex flex-row-reverse p-6 xl:px-16 items-center justify-between",
          "bg-white",
        )}
      >
        <MenuButton onClick={onMenuClick} />
        {hasBackButton && <BackButton onClick={onBackClick} />}
      </div>
    </header>
  )
}
