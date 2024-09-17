import FeatureCorousel from "@/components/home-page/feature-corousel";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import MainContent from "@/components/home-page/MainContent";
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
import Footer from "@/components/footer";
import AboutUs from "@/components/AboutUs";
import placeHolder from "@/public/placeholder.webp";
import TestimonialCorousel from "@/components/testimonial-corousel/testimonial-corousel";

export default function Home() {
  const main_content = {
    title: "Main Content",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
      {
        src: "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
      {
        src: "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
    ],
  };

  const travel_card_arry = [
    {
      image: {
        src: placeHolder,
        alt: "Nature Water",
      },
      title: "First Travel Card",
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
      image: {
        src: "https://source.unsplash.com/1600x900/?nature,water",
        alt: "Nature Water",
      },
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
      image: {
        src: "https://source.unsplash.com/1600x900/?nature,water",
        alt: "Nature Water",
      },
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

  const feature_left = {
    title: "Feature Left",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link1_text: "Get Started",
    link1_url: "#",
    link2_text: "Learn More",
    link2_url: "#",
    image: {
      src: "https://plus.unsplash.com/premium_photo-1669750819140-c3ea74b3dcec?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Presets.com Example Image",
    },
  };

  const feature_right = {
    title: "Feature Right",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link1_text: "Get Started",
    link1_url: "#",
    link2_text: "Learn More",
    link2_url: "#",
    image: {
      src: "https://images.unsplash.com/photo-1521942132694-5daae96ff62d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Presets.com Example Image",
    },
  };

  const feature_corousel = {
    title: "Feature Corousel",
    description:
      "Use it to showcase your latest images. Get started at components.bridgher.to and make sure to install brijr/craft for styling.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
      {
        src: "https://images.unsplash.com/photo-1507730690594-f21182eee8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
      {
        src: "https://images.unsplash.com/photo-1721041879224-ff011603ada5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
      {
        src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
      {
        src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Presets.com Example Image",
      },
    ],
  };

  const testimonial_cards = [
    {
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: {
        src: "https://images.unsplash.com/photo-1521942132694-5daae96ff62d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "John Doe",
      },
      role: "CEO",
    },
    {
      name: "Jane Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: {
        src: "https://images.unsplash.com/photo-1521942132694-5daae96ff62d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Jane Doe",
      },
      role: "CTO",
    },
    {
      name: "John Smith",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: {
        src: "https://images.unsplash.com/photo-1521942132694-5daae96ff62d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "John Smith",
      },
      role: "COO",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="h-24">
        <Navbar />
      </div>
      <MainContent {...main_content} />
      <FeatureRight {...feature_right} />
      <FeatureLeft {...feature_left} />
      <TravelCorousel travelCards={travel_card_arry} />
      <FeatureCorousel {...feature_corousel} />

      <TestimonialCorousel testimonialCards={testimonial_cards} />
      <AboutUs />
      <Footer />
    </div>
  );
}
