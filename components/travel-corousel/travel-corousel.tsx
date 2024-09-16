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
import { TravelCardProps } from "@/app/interfaces/interface";

interface TravelCorouselProps {
  travelCards: TravelCardProps[];
}

export default function TravelCorousel({ travelCards }: TravelCorouselProps) {
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
            {travelCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-5 md:basis-1/2 lg:basis-1/2"
              >
                <TravelCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  facilities={card.facilities}
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
