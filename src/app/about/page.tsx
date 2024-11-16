import HeadingAndText from "@/components/HeadingAndText/HeadingAndText";
import imageHeritage from "../../../public/images/about/desktop/image-heritage.jpg";
import TeamCard from "@/components/TeamCard/TeamCard";
import { teamMembers } from "@/data/team";
import styles from "./about.module.scss";
import InternalHeader from "@/components/InternalHeader/InternalHeader";
import heroImageDesktop from "../../../public/images/about/desktop/image-hero.jpg";
import heroImageTablet from "../../../public/images/about/tablet/image-hero.jpg";
import heroImageMobile from "../../../public/images/about/mobile/image-hero.jpg";

export default function page() {
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
      <section
        className={`container top-spacing bottom-spacing ${styles.teamSection}`}
      >
        <div className={styles.headingContainer}>
          <h2 className={`shortHeading ${styles.heading}`}>The Leaders</h2>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              title={member.title}
              linkedInLink={member.linkedIn}
              twitterLink={member.twitter}
              imgSrc={member.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
