"use client";

import Image from "next/image";
import Image1 from "/public/inspiration/image1.png";
import Image2 from "/public/inspiration/image2.png";
import Image3 from "/public/inspiration/image3.png";
import Image4 from "/public/inspiration/image4.png";
import Image5 from "/public/inspiration/image5.png";
import Image6 from "/public/inspiration/image6.png";
import Image7 from "/public/inspiration/image7.png";
import Image8 from "/public/inspiration/image8.png";
import Image9 from "/public/inspiration/image9.png";
import Image10 from "/public/inspiration/image10.png";
import Image11 from "/public/inspiration/image11.png";


import {useEffect, useState} from "react";
import Icon from '@mdi/react';
import { mdiChevronRight, mdiArrowRight } from '@mdi/js';
import Link from "next/link";

function InspirationCarousel() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const GAP = 24 // pixels
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.screen.width);
  }, [])

  const totalTranslate = carouselItems.reduce((a, b) => a+b.width, 0) + GAP*(carouselItems.length-1)

  const handleTranslate = () => {
    setFocusedIndex((focusedIndex+1) % carouselItems.length);
    //
    setTranslateX((translateX+carouselItems[focusedIndex].width + (focusedIndex+1 === carouselItems.length ? 0 : GAP)) % totalTranslate);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 flex transition-transform duration-500"
        style={{transform: `translateX(-${translateX}px)`, gap: GAP}}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="relative transition-width duration-500"
            style={{width: (focusedIndex === index) ? `${item.enlargedWidth}px`: `${item.width}px`}}
          >
            <Image
              src={item.imageSrc}
              alt=""
              className="transition-height duration-500 w-auto"
              style={{height: focusedIndex===index ? '600px' : '500px'}}
            />
            <div className={`absolute bottom-6 left-6 flex transition duration-500 ${focusedIndex === index ? "opacity-100" : "opacity-0"}`}>
              <div className="bg-trans-white backdrop-blur-sm p-8 gap-2">
                <div className="flex items-center gap-2 text-base text-light-gray font-medium">
                  <p>{`${(index + 1).toString().padStart(2, '0')}`}</p>
                  <div className="w-6 border border-light-gray" />
                  <p>{item.text}</p>
                </div>
                <p className="font-semibold text-2xl text-light-black">{item.excerpt}</p>
              </div>
              <Link href={item.slug} className="p-3 bg-gold text-white self-end"><Icon path={mdiArrowRight} size={1} /></Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-2 md:right-16 top-1/2 rounded-full bg-white p-2 drop-shadow-custom text-gold"
        onClick={handleTranslate}
      >
        <Icon path={mdiChevronRight} size={1} />
      </button>
      <div
        className={`absolute translate-y-1/2 -translate-x-1/2 md:translate-x-0 flex gap-2 transition-left duration-500`}
        style={{
          left: windowWidth >=768 ? `${carouselItems[focusedIndex].enlargedWidth+GAP}px` : '50%',
          bottom: '50px'
        }}
          >
        {Array.from({length: carouselItems.length}).map((item, index) => (
          <div
            key={index}
            className={`p-1 border rounded-full ${focusedIndex===index ? 'border-gold' : 'border-transparent'} transition`}
          >
            <div className={`rounded-full border-4 ${focusedIndex===index ? 'border-gold' : 'border-light-gray'} transition`}/>
          </div>
        ))}
      </div>
    </div>)
}

export default InspirationCarousel;

const carouselItems = [
  {
    imageSrc: Image1,
    width: 347,
    enlargedWidth: 416,
    text: "Bedroom",
    excerpt: "Inner peace",
    slug: "/"
  },
  {
    imageSrc: Image2,
    width: 383,
    enlargedWidth: 459,
    text: "Living Room",
    excerpt: "Comfort and style",
    slug: "/"
  },
  {
    imageSrc: Image3,
    width: 333,
    enlargedWidth: 400,
    text: "Kitchen",
    excerpt: "Culinary adventures",
    slug: "/"
  },
  {
    imageSrc: Image4,
    width: 454,
    enlargedWidth: 545,
    text: "Dining Room",
    excerpt: "Gather around",
    slug: "/"
  },
  {
    imageSrc: Image5,
    width: 666,
    enlargedWidth: 799,
    text: "Office",
    excerpt: "Productivity hub",
    slug: "/"
  },
  {
    imageSrc: Image6,
    width: 380,
    enlargedWidth: 456,
    text: "Bathroom",
    excerpt: "Relax and unwind",
    slug: "/"
  },
  {
    imageSrc: Image7,
    width: 397,
    enlargedWidth: 476,
    text: "Outdoor",
    excerpt: "Breathe fresh air",
    slug: "/"
  },
  {
    imageSrc: Image8,
    width: 341,
    enlargedWidth: 409,
    text: "Guest Room",
    excerpt: "Welcome guests",
    slug: "/"
  },
  {
    imageSrc: Image9,
    width: 333,
    enlargedWidth: 400,
    text: "Basement",
    excerpt: "Extra space",
    slug: "/"
  },
  {
    imageSrc: Image10,
    width: 357,
    enlargedWidth: 429,
    text: "Garage",
    excerpt: "Tools and storage",
    slug: "/"
  },
  {
    imageSrc: Image11,
    width: 339,
    enlargedWidth: 407,
    text: "Attic",
    excerpt: "Hidden treasures",
    slug: "/"
  }
];
