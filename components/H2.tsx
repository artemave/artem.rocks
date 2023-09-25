type Props = {
  children?: React.ReactNode
}

const H2 = ({ children }: Props) => {
  return <h2 className="text-4xl tracking-tight text-center sm:text-left md:tracking-tighter leading-tight font-medium mb-6 mt-6">{children}</h2>
}

export default H2
