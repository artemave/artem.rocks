import { Html, Head, Main, NextScript } from 'next/document'

// Inline and blocking, so the class is set before first paint.
const colorSchemeScript = `{
  const systemDark = matchMedia('(prefers-color-scheme: dark)')
  const apply = () => {
    const chosen = localStorage.getItem('color-scheme')
    document.documentElement.classList.toggle('dark', chosen ? chosen === 'dark' : systemDark.matches)
  }
  apply()
  systemDark.addEventListener('change', apply)
}`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: colorSchemeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
