import React from "react"

interface Props {
  children: React.ReactNode
  className?: string
}

const ButtonGroup = ({ children, className }: Props) => {
  return <div className={`flex justify-center ${className}`}>{children}</div>
}

export default ButtonGroup
