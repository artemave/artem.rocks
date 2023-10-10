import React from 'react'
import Post from '../interfaces/post'
import Tags from './Tags'
import { Link } from '@nextui-org/react'

type Props = {
  posts: Array<Post>
  className?: string
}

const PostTitle = ({ children }) => (
  <h2 className="font-medium mb-4 mt-4">{children}</h2>
)

const BlogIndex: React.FC<Props> = ({ className, posts }) => {
  return (
    <div className={className}>
      {
        posts.map((post, index) => (
          <div key={index}>
            <PostTitle>
              <Link size='lg' className='text-slate-600' href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </PostTitle>
            <div>
              <Tags tags={post.tags}/>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BlogIndex
