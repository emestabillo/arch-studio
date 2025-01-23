import TwoColTextWithImage from "@/components/shared/TwoColTextWithImage/TwoColTextWithImage";
import imageHeritage from "../../../public/images/about/desktop/image-heritage.jpg";
import InternalHeader from "@/components/shared/InternalHeader/InternalHeader";
import heroImageDesktop from "../../../public/images/about/desktop/image-hero.jpg";
import heroImageTablet from "../../../public/images/about/tablet/image-hero.jpg";
import heroImageMobile from "../../../public/images/about/mobile/image-hero.jpg";
import TeamSection from "@/components/about/TeamSection/TeamSection";

export default function About() {
  return (
    <main>
      <InternalHeader
        heading="About"
        subheading="Your team of professionals"
        paragraph="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
        imageSrcDesktop={heroImageDesktop.src}
        imageSrcTablet={heroImageTablet.src}
        imageSrcMobile={heroImageMobile.src}
      />
      <TwoColTextWithImage
        heading="Our Heritage"
        headingVariant="short"
        paragraphs={[
          "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
          "Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. ",
          "Our small team of world-class professionals provides input on every project.",
        ]}
        imgSrc={imageHeritage.src}
        altText="Black and white image of a modern building featuring a sleek, curved glass facade, showcasing architectural elegance."
      />
      <TeamSection />
    </main>
  );
}
