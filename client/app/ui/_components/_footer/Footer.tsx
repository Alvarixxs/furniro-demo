import {montserrat} from "@/app/ui/fonts";
import Link from "next/link";
import Newsletter from "@/app/ui/_components/_footer/Newsletter";

function Footer() {
  return (
    <footer className="bg-white px-12 md:px-24 border-t border-t-trans-black flex flex-col">
      <div className="flex py-12 gap-10 md:gap-20 lg:gap-40 border-b border-b-trans-black flex-col md:flex-row">
        <div className="flex flex-col gap-7 md:gap-14">
          <p className={`font-bold text-black text-2xl ${montserrat.className}`}>Furniro.</p>
          <div className="text-light-gray">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>
        {navItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-5 md:gap-14 font-medium">
            <p className="text-light-gray font-medium">{item.title}</p>
            <div className="flex flex-row md:flex-col gap-5 md:gap-14">
              {item.items.map((item) => (
                <Link key={item.slug} href={item.slug} className="pr-5 border-r md:border-none">{item.text}</Link>
              ))}
            </div>
          </div>
      ))}
        <div className="flex flex-col gap-5 md:gap-14 font-medium">
          <p className="text-light-gray">Newsletter</p>
          <Newsletter />
        </div>
      </div>
      <p className="p-10 self-start">2023 furniro. All rights reserved</p>
    </footer>
  )
}

export default Footer;

const navItems = [
  {
    title: "Links",
    items: [
      {
        text: "Home",
        slug: "/home",
      },
      {
        text: "Shop",
        slug: "/shop",
      },
      {
        text: "About",
        slug: "/about",
      },
      {
        text: "Contact",
        slug: "/contact",
      }
    ]
  },
  {
    title: "Help",
    items: [
      {
        text: "Payment options",
        slug: "/payment",
      },
      {
        text: "Returns",
        slug: "/returns",
      },
      {
        text: "Privacy policies",
        slug: "/policy",
      }
    ]
  }
]