import "@/styles/Button.css"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  primary?: boolean
  disabled?: boolean
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  disabled = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "primary" : ""
  return (
    <button
      type="button"
      className={twMerge(
        "inline-block outline outline-2 rounded-full outline-stone-200",
        "bg-white hover:bg-stone-100 text-stone-800 cursor-pointer duration-500",
        "disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-400",
        `button--${size}`,
        mode,
      )}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  )
}
