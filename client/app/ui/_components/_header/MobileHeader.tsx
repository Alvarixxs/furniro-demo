"use client"

import Logo from "@/app/ui/_components/_header/Logo";
import Icon from '@mdi/react';
import {mdiMenu} from "@mdi/js";
import Link from "next/link";
import {usePathname} from "next/navigation";

function MobileHeader() {
  const path = usePathname();

  return (
    <header className="flex lg:hidden px-6 py-6">
      <div className="flex-grow flex items-center">
        <Logo/>
      </div>
      <Link href={path==="/" ? "/mobile-menu" : "/"} className="flex-grow flex items-center justify-end">
        <Icon path={mdiMenu} size={1.2} className={`${path!=="/" ? 'rotate-90' : ''} transition`}/>
      </Link>
    </header>
  )
}

export default MobileHeader;