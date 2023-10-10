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
          {index > 0 && ' '}
          <span>{tag}</span>
        </Fragment>
      ))}
    </>
  )
}

export default Tags
