import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

// copied from https://github.com/PhilStainer/philstainer.io/blob/main/components/Pre.tsx

const CodeHighlightWithCopy = ({children, ...props}) => {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const onClick = async () => {
    await navigator.clipboard.writeText(preRef.current.innerText)
    setCopied(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000)

    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="relative group mb-12">
      <pre ref={preRef} {...props}>
        <div className="absolute flex items-center space-x-2 top-0 right-0 m-2">
          <span
            className={classNames('hidden fade-in text-xs text-green-400', {
              'group-hover:flex': copied,
            })}
          >
            Copied!
          </span>

          <button
            type="button"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
            className={classNames(
              'hidden transition bg-transparent border rounded-md p-2 focus:outline-none group-hover:flex fade-in',
              {
                'border-green-400': copied,
                'hover:border-gray-500 dark:border-gray-700 dark:hover:border-gray-400 focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50': !copied,
              }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classNames('h-4 w-4 pointer-events-none', {
                'text-gray-500 dark:text-gray-400': !copied,
                'text-green-400': copied,
              })}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                className={classNames({block: !copied, hidden: copied})}
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
                className={classNames({block: copied, hidden: !copied})}
              />
            </svg>
          </button>

        </div>
        {children}
      </pre>
    </div>
  )
}

export default CodeHighlightWithCopy
