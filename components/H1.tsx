type Props = {
  children?: React.ReactNode
  className?: string
}

const H1 = ({ className, children }: Props) => {
  return <h1 className={`text-3xl sm:text-4xl tracking-tight text-center sm:text-left md:tracking-tighter leading-tight font-medium mb-12 mt-4 sm:mt-6 ${className}`}>{children}</h1>
}

export default H1
