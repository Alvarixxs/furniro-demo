import Image from "next/image";
import Dining from "/public/range/dining.png"
import Living from "/public/range/living.png"
import Bedroom from "/public/range/bedroom.png"
import Link from "next/link";
import Icon from "@mdi/react";
import {mdiArrowRight} from "@mdi/js";

function Range() {
  return (

      <div className="flex flex-col md:flex-row gap-4">
        {rangeItems.map((item) => (
          <Link key={item.slug} href={item.slug} className="flex flex-col gap-5 group">
            <Image src={item.imageSrc} alt="" className="rounded-xl"/>
            <div className="flex items-center justify-center gap-1">
              <p className="text-center text-light-black text-2xl font-semibold">{item.text}</p>
              <Icon path={mdiArrowRight} size={1} className="group-hover:translate-x-2 transition duration-500"/>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default Range;

const rangeItems = [
  {
    text: "Dining",
    imageSrc: Dining,
    slug: "/shop/dining"
  },
  {
    text: "Living",
    imageSrc: Living,
    slug: "/shop/living"
  },
  {
    text: "Bedroom",
    imageSrc: Bedroom,
    slug: "/shop/bedroom"
  }
]