import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Content from '../components/content'
import H1 from '../components/H1'
import Link from '../components/Link'
import ButtonLink from '../components/ButtonLink'
import ButtonGroup from '../components/ButtonGroup'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Artem Avetisyan - Web developer</title>
        </Head>
        <Intro />
        <Content>
          <H1>About</H1>
          <p>I've been doing web development since I moved to London in 2007. It was Perl to begin with, then Ruby on Rails, and then Node. I settled on the latter two and ever since been switching back and forth. I also took a lot of interest in automated testing (even wrote a <Link href="https://github.com/artemave/assert-raisins" target='_blank'>test runner</Link>!) and I consider this to be my strong side.</p>
          <p>Besides work, I've also dipped my toes into Go, Python, Dart, Lua, and Vimscript.</p>

          <p>I live in France at the moment (I am a French citizen). I speak fluent English, and reasonable French.</p>
          <ButtonGroup className='mt-10'>
            <ButtonLink href='https://cv.artem.rocks'>View my CV</ButtonLink>
          </ButtonGroup>
        </Content>
      </Layout>
    </>
  )
}
