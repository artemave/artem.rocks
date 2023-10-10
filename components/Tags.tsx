import React from 'react'

type Props = {
  tags: string[]
  className?: string
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <>
          {index > 0 && ' '}
          <span key={index}>{tag}</span>
        </>
      ))}
    </>
  )
}

export default Tags
