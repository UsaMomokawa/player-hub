interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({
  children,
  className = "",
  ...props
}: ContainerProps) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-6 sm:px-24 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
