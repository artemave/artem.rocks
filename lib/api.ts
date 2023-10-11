import fs from 'fs'
import { join } from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import Post from '../interfaces/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  const slugs = fileNames.map(fileName => fileName.replace(/\.mdx$/, ''))
  return slugs
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {} as Post

  // Ensure only the minimal needed data is exposed
  for (const field of fields) {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'readingTime') {
      const { text } = readingTime(content)
      items[field] = text
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  }

  items['tags'] ||= []

  return items
}

const externalPosts = [
  {
    title: 'Node + SWC make a lightning fast typescript runtime',
    excerpt: 'Typescript is great, but the compilation is slow. This post shows how to make it fast.',
    date: '2022-04-29',
    readingTime: '6 min read',
    url: 'https://archive.featurist.co.uk/blog/running-typescript-in-node-with-near-zero-compilation-cost/',
    tags: ['node', 'typescript']
  },
  {
    title: 'Hosting Rails apps for free on Oracle Cloud with Dokku',
    excerpt: 'Dokku has always been a low effort way to have your own Heroku. And now on a free infrastructure.',
    date: '2022-04-29',
    readingTime: '9 min read',
    url: 'https://archive.featurist.co.uk/blog/hosting-rails-apps-for-free-on-oracle-cloud-with-dokku/',
    tags: ['rails', 'dokku', 'devops']
  },
  {
    title: 'Turbo and fast system tests',
    excerpt: 'Build rich UIs with Rails and Turbo and test them without real browser.',
    date: '2020-01-10',
    readingTime: '10 min read',
    url: 'https://archive.featurist.co.uk/blog/turbo-and-fast-system-tests/',
    tags: ['rails', 'testing']
  },
  {
    title: 'File Links in the Terminal',
    excerpt: 'Open file links in the terminal',
    date: '2020-01-10',
    readingTime: '7 min read',
    url: 'https://archive.featurist.co.uk/blog/file-links-in-terminal/',
    tags: ['tmux', 'vim']
  },
  {
    title: 'Mithril vs Hyperdom',
    excerpt: 'Frontend frameworks comparison',
    date: '2019-07-12',
    readingTime: '7 min read',
    url: 'https://archive.featurist.co.uk/blog/mithril-vs-hyperdom/',
    tags: ['node', 'javascript']
  },
  {
    title: 'Building a documentation website',
    excerpt: 'Quickly put together a beautiful documentation website with runnable code examples',
    date: '2019-06-07',
    readingTime: '5 min read',
    url: 'https://archive.featurist.co.uk/blog/building-documentation-website/',
    tags: ['node', 'javascript', 'codesandbox']
  },
  {
    title: 'Keeping node dependencies up to date',
    excerpt: 'Making node dependencies upgrade less of a PITA',
    date: '2019-06-04',
    readingTime: '2 min read',
    url: 'https://archive.featurist.co.uk/blog/keeping-dependencies-up-to-date/',
    tags: ['node', 'npm', 'javascript']
  },
] as Array<Post>

export function getAllPosts(fields: string[] = []): Array<Post> {
  const slugs = getPostSlugs()
  const mdPosts = slugs
    .map((slug) => getPostBySlug(slug, fields))

  const posts = externalPosts.concat(mdPosts)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
