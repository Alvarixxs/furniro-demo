import Image from "next/image";
import Furniro from "/public/furniro.svg";
import {montserrat} from "@/app/ui/fonts";

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={Furniro} alt="" width={50} height={32}/>
      <p className={`${montserrat.className} text-black font-bold text-4xl`}>Furniro</p>
    </div>
  )
}

export default Logo;