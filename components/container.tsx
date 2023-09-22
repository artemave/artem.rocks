type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container max-w-3xl pl-2 pr-2 mx-auto">{children}</div>
}

export default Container
