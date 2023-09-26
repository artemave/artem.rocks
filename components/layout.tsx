import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div id="texture"></div>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
