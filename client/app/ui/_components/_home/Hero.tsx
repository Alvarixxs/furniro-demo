import Link from "next/link";

function Hero() {
  return (
    <section className="bg-scand-interior bg-no-repeat bg-center bg-cover p-14 flex">
      <div className="mt-12 md:mt-36 mb-14 md:mb-40 pl-10 pr-14 pt-16 pb-10 ml-auto self-start bg-sand max-w-xl rounded-xl">
        <p className="text-base font-semibold text-light-black tracking-widest">New Arrival</p>
        <h1 className="text-5xl font-bold text-gold leading-[65px]">Discover Our New Collection</h1>
        <p className="mt-4 text-lg font-medium leading-6 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="text-white font-bold px-20 py-7 bg-gold ">
          <Link href="/shop">BUY NOW</Link>
        </button>
      </div>
    </section>
  )
}

export default Hero;