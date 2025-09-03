import { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react"
import '../styles/index.css'
import '../styles/texture.sass'
import '../styles/glitch.scss'
import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('../lib/texture.mjs')
  }, [])

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      defaults: '2025-05-24',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </PostHogProvider>
  )
}
