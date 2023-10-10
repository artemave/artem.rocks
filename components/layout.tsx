import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div id="texture"></div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex grow items-stretch flex-col">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
