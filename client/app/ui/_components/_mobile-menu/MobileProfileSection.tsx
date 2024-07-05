"use client"

import {menuItems} from "@/app/ui/menuItems";
import Link from "next/link";
import {useContext} from "react";
import {AuthContext} from "@/app/ui/contexts";

function MobileProfileSection() {
  const authContext = useContext(AuthContext);

  const auth = authContext?.auth

  return (
    auth ? (
      <>
        {menuItems.profileItems.map((item) => (
          <Link key={item.slug} href={item.slug} >{item.text}</Link>
        ))}
      </>
    ) : (
      <Link href="/login">Sign in</Link>
    )
  )
}

export default MobileProfileSection