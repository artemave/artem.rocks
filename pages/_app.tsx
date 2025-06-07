import { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react"
import '../styles/index.css'
import '../styles/texture.sass'
import '../styles/glitch.scss'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('../lib/texture.js')
  }, [])

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
