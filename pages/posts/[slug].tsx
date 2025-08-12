import { useRouter } from 'next/router'
import remarkFootnotes from 'remark-footnotes'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import ErrorPage from 'next/error'
import PostHeader from '../../components/PostHeader'
import Layout from '../../components/layout'
import { getPostBySlug, getPostSlugs } from '../../lib/api'
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
import CodeHighlightWithCopy from '../../components/CodeHighlightWithCopy'
import Giscus from '@giscus/react'
import H1 from '../../components/H1'

type Props = {
  post: Post
  mdxSource: MDXRemoteSerializeResult
}

const components = {
  a: Link,
  pre: CodeHighlightWithCopy,
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
          <H1>Loading…</H1>
        ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>{post.title}</title>
                </Head>
                <PostHeader title={post.title}>
                  <span><DateFormatter dateString={post.date} /></span> • <span>{post.readingTime}</span> • <Tags tags={post.tags}/>
                </PostHeader>
                <div className={mdStyles.markdown}>
                  <MDXRemote {...mdxSource} components={components} />
                </div>
                <Giscus
                  id='comments'
                  repo="artemave/artem.rocks"
                  repoId="R_kgDOKXBrbg"
                  category="Announcements"
                  categoryId="DIC_kwDOKXBrbs4CaycK"
                  mapping="pathname"
                  strict="0"
                  reactionsEnabled="1"
                  emitMetadata="0"
                  inputPosition="bottom"
                  theme="light"
                  lang="en"
                  loading="lazy"
                />
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
      remarkPlugins: [
        remarkFootnotes
      ],
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
  const slugs = getPostSlugs()

  return {
    paths: slugs.map((slug) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
