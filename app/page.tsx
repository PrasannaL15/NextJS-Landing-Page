import FeatureCorousel from "@/components/home-page/feature-corousel";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import Hero from "@/components/home-page/hero";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import TravelCard from "@/components/travel-card";
import { TravelCardProps } from "@/app/interfaces/interface";
import TravelCorousel from "@/components/travel-corousel/travel-corousel";

export default function Home() {
  const travel_card_arry = [
    {
      image: "https://source.unsplash.com/1600x900/?nature,water",
      title: "LA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facilities: [
        "Free Wi-Fi",
        "Breakfast included",
        "Swimming pool",
        "Free parking",
      ],
    },
    {
      image: "https://source.unsplash.com/1600x900/?nature,forest",
      title: "LorB",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facilities: [
        "Free Wi-Fi",
        "Breakfast included",
        "Swimming pool",
        "Free parking",
      ],
    },
    {
      image: "https://source.unsplash.com/1600x900/?nature,beach",
      title: "LoC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      facilities: [
        "Free Wi-Fi",
        "Breakfast included",
        "Swimming pool",
        "Free parking",
      ],
    },
  ];

  return (
    <>
      <div className="h-24">
        <Navbar />
      </div>
      <Hero />
      <FeatureLeft />
      <FeatureRight />

      <TravelCorousel travelCards={travel_card_arry} />
      <FeatureCorousel />
    </>
  );
}
