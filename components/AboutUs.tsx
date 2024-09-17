// pages/about.js or components/AboutUs.js

import React from "react";
import { Section, Container } from "@/components/craft";

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <div className="about-info flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="text-lg ">
            Welcome to [Your Travel Company Name], where your next adventure
            awaits! We specialize in providing personalized travel experiences
            for explorers, adventurers, and dreamers alike. Our passion for
            travel and our commitment to delivering exceptional service has made
            us a leading name in the travel industry.
          </p>
          <p className="text-lg ">
            Whether youre looking to unwind on a serene beach, hike through
            scenic landscapes, or explore vibrant cities, we offer tailored
            tours to meet your preferences. With years of experience, our
            dedicated team ensures that each trip is safe, seamless, and filled
            with unforgettable memories.
          </p>
          <p className="text-lg">
            At [Your Travel Company Name], we believe that travel should be more
            than just a trip—it should be a transformative experience. Let us
            take you on a journey to discover new places, cultures, and
            adventures. Contact us today to book your dream vacation or explore
            our curated tour packages designed to bring your travel aspirations
            to life.
          </p>
          <p className="text-lg text-primary-600">
            We are more than just a travel agency; we are your partners in
            exploring the world. Together, lets make every trip an unforgettable
            story worth telling.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
