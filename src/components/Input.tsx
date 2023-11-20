import { twMerge } from "tailwind-merge"

interface InputProps {
  label: string
  value?: string
}

export const Input = ({ label, value, ...props }: InputProps) => {
  return (
    <div className="flex items-center my-4">
      <label className="text-stone-800">{label}</label>
      <input
        type="text"
        value={value}
        className={twMerge(
          "glow ml-2 px-2",
          "rounded border-solid border-2 border-stone-400",
          "text-stone-800",
        )}
        {...props}
      />
    </div>
  )
}
