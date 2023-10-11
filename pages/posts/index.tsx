import React from 'react'
import { Link } from '@nextui-org/react'
import Layout from '../../components/layout'
import Head from 'next/head'
import Content from '../../components/content'
import H1 from '../../components/H1'
import { getAllPosts } from '../../lib/api'
import Tags from '../../components/Tags'
import Post from '../../interfaces/post'
import DateFormatter from '../../components/date-formatter'

const BlogIndexEntry = ({ post }: { post: Post, key: number }) => {
  const linkProps = post.url ? { isExternal: true, showAnchorIcon: true } : {}
  const url = post.url || `/posts/${post.slug}`

  return (
    <div className='mb-8'>
      <h2 className="mt-4">
        <Link {...linkProps} size='lg' className='font-medium text-xl text-slate-600' href={url}>
          {post.title}
        </Link>
      </h2>
      <div className='text-slate-400'>
        <span><DateFormatter dateString={post.date} /></span> • <span>{post.readingTime}</span> • <Tags tags={post.tags}/>
      </div>
      <div>{post.excerpt}</div>
    </div>
  )
}

export default function Index({ allPosts }: { allPosts: Array<Post> }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Artem Avetisyan - tech blog</title>
        </Head>
        <Content>
          <H1>Tech blog</H1>
          {
            allPosts.map((post, index) => <BlogIndexEntry post={post} key={index} />)
          }
        </Content>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'readingTime',
    'tags',
    'url'
  ])

  return {
    props: { allPosts },
  }
}
