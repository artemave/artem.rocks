import { useEffect, useState } from 'react'

type ColorScheme = 'light' | 'dark'

const currentScheme = (): ColorScheme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

const systemScheme = (): ColorScheme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

// The `dark` class itself is set by the inline script in pages/_document.tsx.
export default function useColorScheme() {
  const [scheme, setScheme] = useState<ColorScheme>()

  useEffect(() => {
    setScheme(currentScheme())
    const observer = new MutationObserver(() => setScheme(currentScheme()))
    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const next = currentScheme() === 'dark' ? 'light' : 'dark'
    if (next === systemScheme()) {
      localStorage.removeItem('color-scheme')
    } else {
      localStorage.setItem('color-scheme', next)
    }
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return [scheme, toggle] as const
}
