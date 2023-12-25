const withMDX = require('@next/mdx')()
const withVideos = require('next-videos')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    unoptimized: true,
  },
}

module.exports = withVideos(withMDX(nextConfig))
