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
        <div>
          {/* <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link>
          </Button> */}
          <h1>
            <Balancer>{title}</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>{description}</Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <AutoCarousel images={images} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MainContent;
