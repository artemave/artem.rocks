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
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
