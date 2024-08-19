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

export default function Home() {
  return (
    <>
      <div className="h-24">
        <Navbar />
      </div>
      <Hero />
      <FeatureLeft />
      <FeatureRight />
      <FeatureCorousel />
    </>
  );
}
