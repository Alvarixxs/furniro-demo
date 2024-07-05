"use client"

import Logo from "@/app/ui/_components/_header/Logo";
import Icon from '@mdi/react';
import {mdiMenu} from "@mdi/js";
import Link from "next/link";
import {usePathname} from "next/navigation";

function MobileHeader() {
  const path = usePathname();

  return (
    <div className="flex px-6 py-6">
      <div className="flex-grow flex items-center">
        <Logo/>
      </div>
      <Link href={path==="/mobile-menu" ? "/" : "/mobile-menu"} className="flex-grow flex items-center justify-end">
        <Icon path={mdiMenu} size={1.2} className={`${path==="/mobile-menu" ? 'rotate-90' : ''} transition`}/>
      </Link>
    </div>
  )
}

export default MobileHeader;