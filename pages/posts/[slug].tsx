import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import ErrorPage from 'next/error'
import PostHeader from '../../components/PostHeader'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import type Post from '../../interfaces/post'
import Tags from '../../components/Tags'
import Content from '../../components/content'
import DateFormatter from '../../components/date-formatter'

type Props = {
  post: Post
  mdxSource: MDXRemoteSerializeResult
}

export default function Post({ post, mdxSource }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Content>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>{post.title}</title>
                </Head>
                <PostHeader title={post.title}>
                  <span><DateFormatter dateString={post.date} /></span> • <span>{post.readingTime}</span> • <Tags tags={post.tags}/>
                </PostHeader>
                <MDXRemote {...mdxSource} />
              </article>
            </>
          )}
      </Content>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
    'readingTime',
  ]) as Post

  const mdxSource = await serialize(post.content)

  return {
    props: {
      post,
      mdxSource
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
