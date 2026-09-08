"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/carousel/1.webp",
  "/carousel/2.webp",
  "/carousel/3.webp",
  "/carousel/4.webp",
  "/carousel/5.jpg",
];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/11] overflow-hidden rounded-t-2xl">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`slide-${i}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}
    </div>
  );
};

export default SlideShow;
