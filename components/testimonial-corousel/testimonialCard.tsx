import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { TestimonialProps } from "@/app/interfaces/interface";
export default function TestimonialCard(testimonial: TestimonialProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex aspect-[27/9] items-center justify-center p-6">
        <div className="flex flex-col px-4 py-5 sm:p-6">
          <q className="flex-1 text-gray-600 dark:text-gray-300">
            {testimonial.quote}
          </q>
          <div className="mt-6 flex gap-3">
            <span className="inline-flex rounded-full">
              <Image
                className="h-10 w-10 rounded-full"
                height={40}
                width={40}
                alt={testimonial.img.alt}
                src={testimonial.img.src}
                loading="lazy"
              />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
