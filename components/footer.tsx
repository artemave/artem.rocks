import { FaEnvelopeOpen, FaGithub, FaLinkedin } from 'react-icons/fa6'
import Container from './container'
import SocialLink from './social-link'
import Link from './Link'

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <Container>
        <div className="py-16 flex flex-col sm:flex-row items-center">
          <p className='text-slate-100 mb-0 grow sm:pt-0 text-center sm:text-left leading-8'>Designed and built by Artem Avetisyan<br/><Link target='_blank' href='https://github.com/artemave/artem.rocks'>View source</Link></p>
          <div id='contact' className='flex mt-8 sm:mt-0'>
            <SocialLink href={'mailto:hello@artem.rocks'} icon={FaEnvelopeOpen}/>
            <SocialLink href={'https://github.com/artemave'} icon={FaGithub} className='ml-8'/>
            <SocialLink href={'https://www.linkedin.com/in/artem-avetisyan/'} icon={FaLinkedin} className='ml-8'/>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
