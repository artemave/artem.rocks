import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Content from '../components/content'
import H1 from '../components/H1'
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
          <p>I am a seasoned full-stack web developer with over fifteen years of experience. Throughout my career, I've mainly gone back and forth between Rails and Node, with occasional forays into SPAs. I've worked with a variety of clients - from small startups to enterprises.</p>
          <p>I like to understand the business before coding. I like to translate this understanding into automated scenarios and tests. I prefer clear over clever. I like to deploy fast, small, and often. I like to know about problems in production before the users. I like to talk to the users. I like to talk to the business. I like to talk to the colleagues and pair programming. And, above all, I like coding - it's not just a job, it's a passion.</p>
          <ButtonGroup className='mt-10'>
            <ButtonLink href='https://cv.artem.rocks'>View my CV</ButtonLink>
          </ButtonGroup>
        </Content>
      </Layout>
    </>
  )
}
