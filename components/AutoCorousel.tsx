// components/AutoCarousel.tsx
"use client";
import { useEffect, useState } from "react";
import { imageProps } from "@/app/interfaces/interface";
import Image from "next/image";
const AutoCarousel = ({ images }: { images: imageProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone the first image and add it to the end to create the infinite loop effect
  const extendedImages = [...images, images[0]];

  // Auto slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle transition when reaching the last slide
  useEffect(() => {
    if (currentIndex === images.length) {
      // Temporarily disable transition to "snap" back to the first image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Timeout should match the transition duration (1 second here)

      // Re-enable the transition after snapping back
      setTimeout(() => {
        setIsTransitioning(true);
      }, 1050); // Short delay to re-enable smooth transitions
    }
  }, [currentIndex, images.length]);

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className={`flex w-full h-full ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((image, index) => (
          <div className="min-w-full h-full" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
