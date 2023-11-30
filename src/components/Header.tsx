import { twMerge } from "tailwind-merge"
import { BackButton } from "./BackButton"
import { Container } from "@/components/Container"

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
      <div className="sticky w-full">
        <Container>
          <div
            className={twMerge(
              "flex flex-row py-6 items-center justify-between",
              "bg-white",
            )}
          >
            {hasBackButton && <BackButton onClick={onBackClick} />}
            <p className="text-stone-500">{label}</p>
          </div>
        </Container>
      </div>
    </header>
  )
}
