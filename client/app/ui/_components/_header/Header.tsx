import DesktopHeader from "@/app/ui/_components/_header/_desktop/DesktopHeader";
import MobileHeader from "@/app/ui/_components/_header/_mobile/MobileHeader";

function Header() {
  return (
    <header>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
    </header>
  )
}

export default Header;