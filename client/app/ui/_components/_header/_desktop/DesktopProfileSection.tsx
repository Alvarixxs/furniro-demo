"use client"

import {menuItems} from "@/app/ui/menuItems";
import Link from "next/link";
import Image from "next/image";
import {useContext} from "react";
import {AuthContext} from "@/app/ui/contexts";

function DesktopProfileSection() {
  const authContext = useContext(AuthContext);

  const auth = authContext?.auth

  return (
    auth ? (
      <div className="flex gap-12">
        {menuItems.profileItems.map((item) => (
          <Link key={item.slug} href={item.slug}>
            <Image src={item.src} alt={item.slug} width={28} height={28}/>
          </Link>
        ))}
      </div>
    ) : (
      <Link href="/login">Sign in</Link>
    )
  )
}

export default DesktopProfileSection;