import Account from "/public/menu/account.svg";
import Search from "/public/menu/search.svg";
import Heart from "/public/menu/heart.svg";
import Cart from "/public/menu/cart.svg";

const navItems = [
  {
    text: "Home",
    slug: "/"
  },
  {
    text: "Shop",
    slug: "/shop"
  },
  {
    text: "About",
    slug: "/about"
  },
  {
    text: "Contact",
    slug: "/contact"
  }
]

const profileItems = [
  {
    src: Account,
    slug: "/account",
    text: "Account",
  },
  {
    src: Search,
    slug: "/search",
    text: "Search",
  },
  {
    src: Heart,
    slug: "/liked",
    text: "Liked",
  },
  {
    src: Cart,
    slug: "/cart",
    text: "Cart",
  },
]

export const menuItems = {
  navItems, profileItems,
}