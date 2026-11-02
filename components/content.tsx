import Container from "./container"

type Props = {
  children?: React.ReactNode
}

const Content = ({ children }: Props) => {
  return (
    <div className="bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300 pt-10 pb-16 border-t-8 border-slate-300 dark:border-slate-700 grow-[2]">
      <Container>{children}</Container>
    </div>
  )
}

export default Content
