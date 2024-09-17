// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";
import { FeatureProps } from "@/app/interfaces/interface";

const FeatureRight = ({
  title,
  description,
  link1_text,
  link1_url,
  link2_text,
  link2_url,
  image,
}: FeatureProps) => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">{title}</h3>
          <p className="font-light leading-[1.4] opacity-70">{description}</p>
          <div className="not-prose flex items-center gap-2">
            {link1_text && link1_url && (
              <Button className="w-fit" asChild>
                <Link href={link1_url}> {link1_text}</Link>
              </Button>
            )}
            {link2_text && link2_url && (
              <Button className="w-fit" variant="link" asChild>
                <Link href={link2_url}> {link2_text}</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={image.src}
            width={1920}
            height={1080}
            alt={image.alt ? image.alt : "placeholder"}
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRight;
