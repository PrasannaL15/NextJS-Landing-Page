// components/TravelCard.tsx

import React from "react";
import Image from "next/image";
import logo from "../public/vercel.svg";
import { TravelCardProps } from "@/app/interfaces/interface";
import { Button } from "./ui/button";
export default function TravelCard({
  image,
  title,
  description,
  facilities,
}: TravelCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex">
      {/* Left side: Image */}
      <div className="w-1/2">
        <Image
          src={image.src}
          width={0}
          height={0}
          sizes="100vw"
          alt={title}
          className="object-cover w-full h-full"
        ></Image>
      </div>

      {/* Right side: Description */}
      <div className="w-1/2 p-4 flex flex-col justify-between">
        {/* Destination Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Facilities */}
        <div className="mt-4">
          <h3 className="font-semibold text-lg mb-2">Facilities:</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {
              // List of facilities
              facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))
            }
          </ul>
        </div>

        {/* Enquire Now Button */}
        <div className="mt-4">
          <Button>Enquire Now</Button>
        </div>
      </div>
    </div>
  );
}
