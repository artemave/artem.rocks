import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Content from '../components/content'
import H2 from '../components/H2'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Artem Avetisyan - Web developer</title>
        </Head>
        <Intro />
        <Content>
          <H2>About</H2>
          <p>Born in Russia, I moved to London at the age of thirty, where I spent most of my career as a web developer. My first gig there was in Perl. Around 2009, I switched to Ruby on Rails as it seemed superior in every way. A few years later, I picked up Node, and since then, I've been going back and forth between the two. I consider myself a full-stack developer, although the backend part of it is probably more valuable.</p>
          <p>Besides work, I've also dipped my toes into Go, Python, Dart, Lua, and Vimscript.</p>

          <p>I am currently living in France (I am a French citizen). I speak native Russian, fluent English, and reasonable French.</p>
        </Content>
      </Layout>
    </>
  )
}

          // {heroPost && (
          //   <HeroPost
          //     title={heroPost.title}
          //     coverImage={heroPost.coverImage}
          //     date={heroPost.date}
          //     author={heroPost.author}
          //     slug={heroPost.slug}
          //     excerpt={heroPost.excerpt}
          //   />
          // )}
          // {morePosts.length > 0 && <MoreStories posts={morePosts} />}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
