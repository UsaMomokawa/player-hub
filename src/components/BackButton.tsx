import { twMerge } from "tailwind-merge"
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline"

interface ButtonProps {
  primary?: boolean
  onClick?: () => void
}

export const BackButton = ({ primary = false, ...props }: ButtonProps) => {
  const mode = primary ? "bg-stone-100" : ""
  return (
    <button
      type="button"
      className={twMerge(
        "inline-block rounded-full p-2",
        "outline outline-2 outline-stone-200",
        "bg-white hover:bg-stone-100",
        "text-stone-500",
        "cursor-pointer",
        mode,
      )}
      {...props}
    >
      <ArrowSmallLeftIcon className="h-6 w-6" />
    </button>
  )
}
