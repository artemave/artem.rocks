type Props = {
  children?: React.ReactNode
}

const H2 = ({ children }: Props) => {
  return <h2 className="text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight font-medium mb-6">{children}</h2>
}

export default H2
