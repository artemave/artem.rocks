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
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import Link from '../../components/Link'
import mdStyles from '../../components/markdown-styles.module.css'

type Props = {
  post: Post
  mdxSource: MDXRemoteSerializeResult
}

const components = {
  a: Link
}

const extraMarkdownCSS = `
  pre code.hljs {
    margin-bottom: 1em;
  }
`

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
                  <style>{extraMarkdownCSS}</style>
                </Head>
                <PostHeader title={post.title}>
                  <span><DateFormatter dateString={post.date} /></span> • <span>{post.readingTime}</span> • <Tags tags={post.tags}/>
                </PostHeader>
                <div className={mdStyles.markdown}>
                  <MDXRemote {...mdxSource} components={components} />
                </div>
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

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        rehypeHighlight,
      ],
    }
  })

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
