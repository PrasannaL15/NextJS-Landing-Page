import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";
import TravelCard from "../travel-card";
import { Section, Container } from "@/components/craft";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialProps } from "@/app/interfaces/interface";
import TestimonialCard from "./testimonialCard";

interface TestimonialCorouselProps {
  testimonialCards: TestimonialProps[];
}

export default function TestimonialCorousel({
  testimonialCards,
}: TestimonialCorouselProps) {
  return (
    <Section>
      <Container>
        <Carousel
          className="mt-6 w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonialCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-5 md:basis-1/2 lg:basis-1/2"
              >
                <TestimonialCard
                  quote={card.quote}
                  img={card.img}
                  name={card.name}
                  role={card.role}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
}
