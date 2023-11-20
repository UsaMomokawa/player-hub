import "@/styles/Button.css"

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  textColor?: string
  outlineColor?: string
  size?: "small" | "medium" | "large"
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor = "#ffffff",
  textColor = "#1C1917",
  outlineColor = "#d6d3d1",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary"
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${textColor};
          outline-color: ${outlineColor};
        }
      `}</style>
    </button>
  )
}
