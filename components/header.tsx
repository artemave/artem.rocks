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
import { FaMoon, FaSun } from "react-icons/fa6"
import useColorScheme from "../lib/useColorScheme"

const MyNavBar = extendVariants(Navbar, {
  variants: {
    isBlurred: {
      true: {
        base: [
          "backdrop-filter-none",
          "data-[menu-open=true]:bg-slate-800",
          "data-[menu-open=true]:backdrop-saturate-1",
          "data-[menu-open=true]:transition-none",
          'transition-colors',
          'delay-300',
          "bg-transparent",
          '-mt-px',
          'max-w-3xl',
          'pl-2',
          'pr-2',
          'mx-auto'
        ],
        wrapper: ['sm:px-0'],
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
  const [colorScheme, toggleColorScheme] = useColorScheme()

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
        {
          menuItems.map((item, index) => <NavbarItem key={index} className={`hidden sm:block ${index === 0 ? '-ml-2' : 'ml-4'} backdrop-blur-[0.15px] md:backdrop-blur-[0.5px] px-2 rounded-lg`}>{ renderMenuItemLink(item ) }</NavbarItem>)
        }
      </NavbarContent>
      <NavbarContent justify="end">
        {colorScheme && (
          <button
            onClick={toggleColorScheme}
            aria-label={colorScheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-slate-100 hover:text-slate-300 p-2 -mr-2"
          >
            {colorScheme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        )}
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
