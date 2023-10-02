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
    url: '/blog',
    title: 'Blog'
  },
  {
    url: '/#contact',
    title: 'Contact'
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  function renderMenuItemLink(item: { url: string, title: string }, index: number): React.ReactNode {
    return (
      <Link onClick={() => setIsMenuOpen(false)} key={index} size='lg' className="w-full text-slate-100" href={item.url}>
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
          menuItems.map((item, index) => <NavbarItem className="ml-8">{ renderMenuItemLink(item, index) }</NavbarItem>)
        }
      </NavbarContent>
      <NavbarMenu>
        {
          menuItems.map((item, index) => <NavbarMenuItem className="mt-4 ml-2">{ renderMenuItemLink(item, index) }</NavbarMenuItem>)
        }
      </NavbarMenu>
    </MyNavBar>
  )
}

export default Header
