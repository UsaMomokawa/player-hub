import "@/styles/Button.css"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  primary?: boolean
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "bg-stone-100" : ""
  return (
    <button
      type="button"
      className={twMerge(
        "inline-block",
        "outline outline-2 rounded-full outline-stone-200",
        "bg-white hover:bg-stone-100",
        "text-stone-800",
        "cursor-pointer",
        `button--${size}`,
        mode,
      )}
      {...props}
    >
      {label}
    </button>
  )
}
