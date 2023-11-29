interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={`mx-auto px-6 md:px-24 ${className}`} {...props}>
      {children}
    </div>
  )
}
