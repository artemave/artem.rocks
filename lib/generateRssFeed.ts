import fs from 'fs'
import { Feed } from 'feed'

export default function generateRssFeed(siteUrl, allPosts) {
  const feedOptions = {
    title: "Artem's blog posts | RSS Feed",
    description: "Welcome to Artem's tech blog posts!",
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/profile_pic_website.jpg`,
    favicon: `${siteUrl}/favicon/favicon.svg`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Artem Avetisyan`,
    generator: "Feed for Artem's tech blog",
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
      json: `${siteUrl}/rss.json`,
      atom: `${siteUrl}/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  allPosts.forEach((post) => {
    const url = post.url || `${siteUrl}/posts/${post.slug}`

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      date: new Date(post.date),
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
  fs.writeFileSync('./public/rss.json', feed.json1())
  fs.writeFileSync('./public/atom.xml', feed.atom1())
}
