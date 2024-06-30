import DesktopHeader from "@/app/ui/_components/_header/DesktopHeader";
import MobileHeader from "@/app/ui/_components/_header/MobileHeader";

function Header() {
  return (
    <header>
      <DesktopHeader />
      <MobileHeader />
    </header>
  )
}

export default Header;