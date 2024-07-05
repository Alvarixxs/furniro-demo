import {menuItems} from "@/app/ui/menuItems";
import MobileNavSection from "@/app/ui/_components/_mobile-menu/MobileNavSection";
import MobileProfileSection from "@/app/ui/_components/_mobile-menu/MobileProfileSection";

function MobileMenu() {
  const items = [...menuItems.navItems, ...menuItems.profileItems]
  return (
    <section className="flex flex-col gap-6 text-neutral-600 text-2xl p-6 min-h-screen border-t">
      <MobileNavSection />
      <MobileProfileSection />
    </section>
  )
}

export default MobileMenu;