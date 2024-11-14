import HeadingAndText from "@/components/HeadingAndText/HeadingAndText";
import imageHeritage from "../../../public/images/about/desktop/image-heritage.jpg";

export default function page() {
  return (
    <div>
      <HeadingAndText
        heading="Our Heritage"
        headingVariant="short"
        paragraphs={[
          "Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.",
          "Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. ",
          "Our small team of world-class professionals provides input on every project.",
        ]}
        imgSrc={imageHeritage.src}
      />
    </div>
  );
}
