// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";
import { MainContentProps } from "@/app/interfaces/interface";
import AutoCarousel from "../AutoCorousel";

const MainContent = ({ title, description, images }: MainContentProps) => {
  return (
    <Section>
      <Container>
        <div className="relative h-[80vh] w-full overflow-hidden rounded-lg md:rounded-xl">
          {/* Background image */}
          <div className="absolute inset-0">
            <AutoCarousel images={images} />
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary opacity-50"></div>
          </div>
          {/* Content on top of the image */}
          <div className="relative z-9 flex flex-col items-center justify-center h-full text-center text-popover p-4">
            <h1>
              <Balancer>{title}</Balancer>
            </h1>
            <h3 className="text-popover">
              <Balancer>{description}</Balancer>
            </h3>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MainContent;
