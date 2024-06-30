import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/ui/_components/_header/Logo";
import {menuItems} from "@/app/ui/menuItems";

function DesktopHeader() {
  return (
    <header className="bg-white py-8 pl-6 xl:pl-12 pr-12 xl:pr-24 lg:flex items-center justify-between hidden">
      <Logo />
      <div className="flex text-base text-black gap-10 xl:gap-20 font-medium">
        {menuItems.navItems.map((item) => (
          <Link key={item.slug} href={item.slug}>{item.text}</Link>
        ))}
      </div>
      <div className="flex gap-12">
        {menuItems.profileItems.map((item) => (
          <Link key={item.slug} href={item.slug}>
            <Image src={item.src} alt={item.slug} width={28} height={28}/>
          </Link>
        ))}
      </div>
    </header>
  )
}

export default DesktopHeader;