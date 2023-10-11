type Props = {
  children?: React.ReactNode
}

const H1 = ({ children }: Props) => {
  return <h1 className="text-4xl tracking-tight text-center sm:text-left md:tracking-tighter leading-tight font-medium mb-12 mt-4 sm:mt-6">{children}</h1>
}

export default H1
