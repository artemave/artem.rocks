import React, { Fragment } from 'react'

type Props = {
  tags: string[]
  className?: string
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Fragment key={index}>
          <span className='px-2 mr-2 bg-slate-500 text-slate-100 rounded'>{tag}</span>
        </Fragment>
      ))}
    </>
  )
}

export default Tags
