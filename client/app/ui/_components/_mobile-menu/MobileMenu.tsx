import {menuItems} from "@/app/ui/menuItems";
import Link from "next/link";

function MobileMenu() {
  const items = [...menuItems.navItems, ...menuItems.profileItems]
  return (
    <section className="flex flex-col gap-6 text-neutral-600 text-2xl p-6 min-h-screen border-t">
      {items.map((item) => (
        <Link key={item.slug} href={item.slug} >{item.text}</Link>
      ))}
    </section>
  )
}

export default MobileMenu;