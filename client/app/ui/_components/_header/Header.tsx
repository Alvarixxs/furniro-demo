import DesktopHeader from "@/app/ui/_components/_header/DesktopHeader";
import MobileHeader from "@/app/ui/_components/_header/MobileHeader";

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