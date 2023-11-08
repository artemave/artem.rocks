import H1 from "./H1"

type Props = {
  title: string
  children: React.ReactNode
}

const PostHeader = ({ title, children }: Props) => {
  return (
    <>
      <H1>{title}</H1>
      <div className="mb-10 text-lg text-slate-400">
        {children}
      </div>
    </>
  )
}

export default PostHeader
