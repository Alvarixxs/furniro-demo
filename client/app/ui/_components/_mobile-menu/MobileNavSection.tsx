import {menuItems} from "@/app/ui/menuItems";
import Link from "next/link";

function MobileNavSection() {
  return (
    <>
      {menuItems.navItems.map((item) => (
        <Link key={item.slug} href={item.slug} >{item.text}</Link>
      ))}
    </>
  )
}

export default MobileNavSection