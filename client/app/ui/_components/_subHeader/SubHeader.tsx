"use client"

import Icon from "@mdi/react";
import {mdiChevronRight} from "@mdi/js";
import {usePathname} from "next/navigation";
import {formatPath} from "@/app/lib/utils";

function SubHeader() {
  const path = usePathname()

  return (
    <header className="h-80 bg-subHeader bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center gap-2 text-black">
      <h2 className="text-5xl font-medium">{formatPath(path)}</h2>
      <div className="flex">
        <p className="text-base font-medium">Home</p>
        <Icon path={mdiChevronRight} size={1} />
        <p className="text-base font-light">{formatPath(path)}</p>
      </div>
    </header>
  )
}

export default SubHeader;