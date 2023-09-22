import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/texture.sass'
import '../styles/glitch.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
