import Range from "@/app/ui/_components/_home/Range";
import Link from "next/link";
import FeaturedProducts from "@/app/ui/_components/_products/FeaturedProducts";
import InspirationCarousel from "@/app/ui/_components/_home/InspirationCarousel";
import Image from "next/image";
import ImagesDesktop from "/public/share/imagesDesktop.png";
import ImagesMobile from "/public/share/imagesMobile.png";
import {Suspense} from "react";
import {FeaturedProductsSkeleton} from "@/app/ui/_components/skeletons";

export default function Home() {
  return (
    <main>
      <section className="bg-scand-interior bg-no-repeat bg-center bg-cover p-14 flex">
        <div
          className="mt-12 md:mt-36 mb-14 md:mb-40 pl-10 pr-14 pt-16 pb-10 ml-auto self-start bg-sand max-w-xl rounded-xl">
          <p className="text-base font-semibold text-light-black tracking-widest">New Arrival</p>
          <h1 className="text-5xl font-bold text-gold leading-[65px] animate-appear-from-below">Discover Our New
            Collection</h1>
          <p className="mt-4 text-lg font-medium leading-6 mb-12 animate-appear-from-below">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="text-white font-bold px-20 py-7 bg-gold ">
            <Link href="/shop">BUY NOW</Link>
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center mt-14 px-6">
        <h2 className="text-light-black font-bold text-3xl">Browse The Range</h2>
        <p className="text-medium-gray text-lg mb-12 text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.</p>
        <Range/>
      </section>
      <section className="flex flex-col items-center mt-14 px-6 gap-8">
        <h2 className="font-bold text-4xl text-light-black">Our products</h2>
        <div className="flex flex-col gap-8">
          <Suspense fallback={<FeaturedProductsSkeleton numItems={8} />}>
            <FeaturedProducts query='' currentPage={1} range='' numItems={8}/>
          </Suspense>
          <Link
            href="/shop"
            className="py-3 px-20 border border-gold text-gold text-base font-semibold self-center
        hover:bg-gold hover:text-white transition"
          >
            Show More
          </Link>
        </div>
      </section>
      <section
        className="mt-14 px-6 md:pl-24 md:pr-0 py-11 flex-col md:flex-row flex items-center bg-light-beige overflow-hidden gap-11">
        <div className="flex flex-col max-w-md">
          <h2 className="font-bold text-4xl text-light-black leading-tight mb-1">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="font-medium leading-normal mb-6">
            Our designer already made a lot of beautiful prototype rooms to inspire you
          </p>
          <button
            className="self-start bg-gold px-9 py-3 text-white font-semibold hover:border-gold
          hover:bg-transparent hover:text-gold border border-transparent transition"
          >
            Explore More
          </button>
        </div>
        <InspirationCarousel/>
      </section>
      <section className="mt-14 mb-14 flex flex-col items-center gap-1 overflow-hidden">
        <p className="text-medium-gray text-xl font-semibold">Share your setup with</p>
        <h2 className="font-bold text-4xl text-light-black">#FurniroFurniture</h2>
        <Image src={ImagesDesktop} alt="" width={1440} height={721} className="hidden md:block"/>
        <Image src={ImagesMobile} alt="" width={842} height={715} className="block md:hidden"/>
      </section>
    </main>
  );
}
