import { StaticImageData } from "next/image";

export interface TravelCardProps {
  image: imageProps;
  title: string;
  description: string;
  facilities: string[];
}
export interface MainContentProps {
  title: string;
  description: string;
  images: imageProps[];
}
export interface FeatureProps {
  title: string;
  description: string;
  link1_text: string;
  link1_url: string;
  link2_text: string;
  link2_url: string;
  image: imageProps;
}

export interface imageProps {
  src: string | StaticImageData;
  alt: string;
}

export interface featureCorouselProps {
  title: string;
  description: string;
  images: imageProps[];
}

export interface TestimonialProps {
  name: string;
  quote: string;
  img: imageProps;
  role: string;
}
