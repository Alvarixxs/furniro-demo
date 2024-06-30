import Image from "next/image";
import Dining from "/public/range/dining.png"
import Living from "/public/range/living.png"
import Bedroom from "/public/range/bedroom.png"
import Link from "next/link";

function Range() {
  return (
    <section className="flex flex-col items-center mt-14 px-6">
      <h2 className="text-light-black font-bold text-3xl">Browse the range</h2>
      <p className="text-medium-gray text-lg mb-12 text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-col md:flex-row gap-4">
        {rangeItems.map((item) => (
          <Link key={item.slug} href={item.slug} className="flex flex-col gap-5">
            <Image src={item.imageSrc} alt="" className="rounded-xl"/>
            <p className="text-center text-light-black text-2xl font-semibold">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
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