import { ReactNode } from "react"

type Props = {
  children?: ReactNode,
  href: string,
  className?: string
}


const ButtonLink = ({ href, className, children }: Props) => {
  return (
    <a href={href} className={`hover:invert-[.1] text-slate-100 bg-slate-700 inline-block rounded-lg px-5 py-3 ${className}`}>{children}</a>
  )
}

export default ButtonLink
