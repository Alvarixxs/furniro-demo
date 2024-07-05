import Logo from "@/app/ui/_components/_header/Logo";
import DesktopNavSection from "@/app/ui/_components/_header/_desktop/DesktopNavSection";
import DesktopProfileSection from "@/app/ui/_components/_header/_desktop/DesktopProfileSection";

function DesktopHeader() {
  return (
    <div className="bg-white py-8 pl-6 xl:pl-12 pr-12 xl:pr-24 flex items-center justify-between">
      <Logo />
      <DesktopNavSection />
      <DesktopProfileSection />
    </div>
  )
}

export default DesktopHeader;