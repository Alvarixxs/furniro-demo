'use client';

import { menuItems } from "@/app/ui/menuItems";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/app/ui/contexts";
import Icon from '@mdi/react';
import { mdiLogin } from '@mdi/js';

function DesktopProfileSection() {
  const authContext = useContext(AuthContext);

  const auth = authContext?.auth;

  return (
    auth ? (
      <div className="flex gap-12">
        {menuItems.profileItems.map((item) => (
          <Link key={item.slug} href={item.slug}>
            <Image src={item.src} alt={item.slug} width={28} height={28} />
          </Link>
        ))}
      </div>
    ) : (
      <Link href="/login" className="bg-gold rounded-3xl h-10 w-40 relative group text-white">
        <p
          className="font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-x-3/4
           transition duration-500"
        >
          Sign In
        </p>
        <Icon
          path={mdiLogin}
          size={1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
          group-hover:translate-x-3/4 transition duration-500 ease-out"
        />
      </Link>
    )
  );
}

export default DesktopProfileSection;
