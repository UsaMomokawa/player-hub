import "@/styles/MenuButton.css"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"

interface ButtonProps {
  primary?: boolean
  onClick?: () => void
}

export const Button = ({ primary = false, ...props }: ButtonProps) => {
  const mode = primary ? "menu-button--primary" : ""
  return (
    <button
      type="button"
      className={["menu-button", mode].join(" ")}
      {...props}
    >
      <Bars3BottomRightIcon className="h-6 w-6" />
    </button>
  )
}
