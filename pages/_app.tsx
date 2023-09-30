import { AppProps } from 'next/app'
import {NextUIProvider} from "@nextui-org/react"
import '../styles/index.css'
import '../styles/texture.sass'
import '../styles/glitch.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
