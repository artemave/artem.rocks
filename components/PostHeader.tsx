import PostTitle from './post-title'

type Props = {
  title: string
  children: React.ReactNode
}

const PostHeader = ({ title, children }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-10 text-lg text-slate-400">
        {children}
      </div>
    </>
  )
}

export default PostHeader
