import Trophy from "/public/subfooter/trophy.svg"
import Shipping from "/public/subfooter/shipping.svg"
import Guarantee from "/public/subfooter/guarantee.svg"
import CustomerSupport from "/public/subfooter/customer-support.svg"
import Image from "next/image";


function SubFooter() {
  return (
    <footer className="bg-light-beige flex items-center justify-center flex-wrap gap-14 px-6 py-24">
      {subFooterItems.map((item) => (
        <div key={item.text} className="flex gap-3">
          <Image src={item.icon} alt="" />
          <div className="flex flex-col justify-between gap-1">
            <p className="text-2xl font-semibold text-light-black">{item.text}</p>
            <p className="text-xl font-medium text-light-gray">{item.excerpt}</p>
          </div>
        </div>
      ))}
    </footer>
  )
}

export default SubFooter;

const subFooterItems = [
  {
    icon: Trophy,
    text: "High Quality",
    excerpt: "crafted from top materials",
  },
  {
    icon: Guarantee,
    text: "Warranty protection",
    excerpt: "Over 2 years",
  },
  {
    icon: Shipping,
    text: "Free Shipping",
    excerpt: "Order over 150$",
  },
  {
    icon: CustomerSupport,
    text: "24/7 Support",
    excerpt: "Dedicated support",
  }
]