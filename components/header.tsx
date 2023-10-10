import {
  extendVariants,
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react"
import { useRouter } from "next/router"
import React from "react"

const MyNavBar = extendVariants(Navbar, {
  variants: {
    isBlurred: {
      true: {
        base: [
          "backdrop-blur-none",
          "data-[menu-open=true]:bg-slate-800",
          "data-[menu-open=true]:backdrop-saturate-1",
          "data-[menu-open=true]:transition-none",
          'transition-colors',
          'delay-300',
          "bg-transparent",
          "backdrop-saturate-1",
          '-mt-px',
          'max-w-3xl',
          'pl-2',
          'pr-2',
          'mx-auto'
        ],
        menu: ["backdrop-saturate-1", 'bg-slate-800'],
      }
    }
  },
  defaultVariants: {
    isBlurred: true,
  },
})

const menuItems = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: '/posts',
    title: 'Blog'
  },
  {
    url: 'https://cv.artem.rocks/',
    title: 'Resume'
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const router = useRouter()
  const currentPath = router.pathname

  function renderMenuItemLink(item: { url: string, title: string }): React.ReactNode {
    const isActive = currentPath === item.url

    return (
      <Link onClick={() => setIsMenuOpen(false)} size='lg' className={`w-full text-slate-100 ${isActive ? 'font-bold' : ''}`} href={item.url}>
        {item.title}
      </Link>
    )
  }

  return (
    <MyNavBar position='static' className="dark text-foreground" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          menuItems.map((item, index) => <NavbarItem key={index} className="ml-8">{ renderMenuItemLink(item ) }</NavbarItem>)
        }
      </NavbarContent>
      <NavbarMenu>
        {
          menuItems.map((item, index) => <NavbarMenuItem key={index} className="mt-4 ml-2">{ renderMenuItemLink(item) }</NavbarMenuItem>)
        }
      </NavbarMenu>
    </MyNavBar>
  )
}

export default Header
