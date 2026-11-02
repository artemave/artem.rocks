const SocialLink = ({ href, icon: Icon, className = undefined }) => {
  return (
    <a href={href} target='_blank' className={className}>
      <Icon className='text-slate-200 w-10 h-10 hover:text-slate-300' />
    </a>
  )
}

export default SocialLink
