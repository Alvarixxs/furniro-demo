import {menuItems} from "@/app/ui/menuItems";
import Link from "next/link";

function DesktopNavSection() {
  return (
    <div className="flex text-base text-black gap-10 xl:gap-20 font-medium">
      {menuItems.navItems.map((item) => (
        <Link key={item.slug} href={item.slug}>{item.text}</Link>
      ))}
    </div>
  )
}

export default DesktopNavSection;