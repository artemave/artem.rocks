type Props = {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return <div className={`container max-w-3xl pl-2 pr-2 mx-auto ${className}`}>{children}</div>
}

export default Container
