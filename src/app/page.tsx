import arrow from "../../public/icons/icon-arrow.svg";
// import Button from "@/components/Button";
import ImageWithOverlayText from "@/components/ImageWithOverlayText/ImageWithOverlayText";
import imageSrcMobile from "../../public/images/home/mobile/image-small-team.jpg";
import imageSrcTablet from "../../public/images/home/tablet/image-small-team.jpg";
import imageSrcDesktop from "../../public/images/home/desktop/image-small-team.jpg";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectList } from "@/data/portfolio";
import Button from "@/components/Button/Button";
import styles from "./home.module.scss";
import HeadingAndText from "@/components/HeadingAndText/HeadingAndText";
import welcomeImage from "../../public/images/home/desktop/image-welcome.jpg";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <main>
      <section className={`bottom-spacing ${styles.carouselSection}`}>
        <Carousel />
      </section>
      <HeadingAndText
        heading="Welcome to Arch Studio"
        paragraphs={[
          "We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.",
          "Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.",
          "We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.",
        ]}
        imgSrc={welcomeImage.src}
      />
      <section className="container top-spacing bottom-spacing">
        <ImageWithOverlayText
          imageSrcDesktop={imageSrcDesktop.src}
          imageSrcTablet={imageSrcTablet.src}
          imageSrcMobile={imageSrcMobile.src}
          heading="Small team, big ideas"
          ctaText="about us"
          href="/about"
        />
      </section>
      <section className={`container ${styles.featuredSection}`}>
        <h2>Featured</h2>
        <ul className={styles.featuredCardsContainer}>
          {projectList
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.projectTitle}
                variant="numberedCard"
                projectTitle={project.projectTitle}
                subHeading={project.subHeading}
                imageSrcDesktop={project.imageSrcDesktop}
                imageSrcTablet={project.imageSrcTablet}
                imageSrcMobile={project.imageSrcMobile}
                ctaLinkText="View all projects"
                ctaLinkUrl="/portfolio"
              />
            ))}
        </ul>
        <Button
          text="See all"
          icon={arrow}
          href="/portfolio"
          otherClass={styles.featuredButton}
        />
      </section>
      {/* <ProjectCard
        projectTitle="Seraph Station"
        subHeading="September 2019"
        imageSrcDesktop={imageSrcDesktop.src}
        imageSrcTablet={imageSrcTablet.src}
        imageSrcMobile={imageSrcMobile.src}
      /> */}
      {/* <ProjectCard
        variant="defaultCard"
        projectTitle="Project Del Sol"
        ctaLinkText="View all projects"
        ctaLinkUrl="/portfolio"
        imageSrcDesktop={imageSrcDesktop.src}
        imageSrcTablet={imageSrcTablet.src}
        imageSrcMobile={imageSrcMobile.src}
      /> */}
      {/* <h1 className="screenReaderOnly">Welcome</h1> */}
      {/* <ImageWithOverlayText
        variant={"sliderItem"}
        imageSrcDesktop={imageSrcDesktop.src}
        imageSrcTablet={imageSrcTablet.src}
        imageSrcMobile={imageSrcMobile.src}
        heading="Small team, big ideas"
        paragraph="Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture."
        ctaText="about us"
      /> */}

      {/* <Button
        text="Click me"
        href="/about"
        // onClick={() => console.log("Button clicked")}
      />
      <Button icon={arrow} />
      <Button text={"02"} variant="light" /> */}
    </main>
  );
}
