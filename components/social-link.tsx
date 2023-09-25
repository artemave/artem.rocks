const SocialLink = ({ href, icon: Icon, className = undefined }) => {
  return (
    <a href={href} target='_blank' className={className}>
      <Icon className='invert-[.9] w-10 h-10 hover:invert-[.8]' />
    </a>
  )
}

export default SocialLink
