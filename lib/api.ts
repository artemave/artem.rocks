import fs from 'fs'
import { join } from 'path'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import Post from '../interfaces/post'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  for (const field of fields) {
    if (field === 'slug') {
      items[field] = realSlug
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

const externalPosts = []

export function getAllPosts(fields: string[] = []): Array<Post> {
  const slugs = getPostSlugs()
  const mdPosts = slugs
    .map((slug) => getPostBySlug(slug, fields))

  const posts = externalPosts.concat(mdPosts)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}
