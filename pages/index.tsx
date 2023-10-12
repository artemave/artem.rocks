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
          <p>Born in Russia, I moved to London at the age of thirty, where I spent most of my career as a web developer. Around 2009, I switched from Perl to Ruby on Rails and picked up Node a few years later. Ever since I've been going back and forth between the two. I also took a lot of interest in automated testing (even wrote a <Link href="https://github.com/artemave/assert-raisins" target='_blank'>test runner</Link>!) and I consider this to be my strong side.</p>
          <p>Besides work, I've also dipped my toes into Go, Python, Dart, Lua, and Vimscript.</p>

          <p>I am currently living in France (I am a French citizen). I speak native Russian, fluent English, and reasonable French.</p>
          <ButtonGroup className='mt-10'>
            <ButtonLink href='https://cv.artem.rocks'>View my CV</ButtonLink>
          </ButtonGroup>
        </Content>
      </Layout>
    </>
  )
}
