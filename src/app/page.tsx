import ImageWithOverlayText from "@/components/shared/ImageWithOverlayText/ImageWithOverlayText";
import imageSrcMobile from "../../public/images/home/mobile/image-small-team.jpg";
import imageSrcTablet from "../../public/images/home/tablet/image-small-team.jpg";
import imageSrcDesktop from "../../public/images/home/desktop/image-small-team.jpg";
import styles from "./home.module.scss";
import TwoColTextWithImage from "@/components/shared/TwoColTextWithImage/TwoColTextWithImage";
import welcomeImage from "../../public/images/home/desktop/image-welcome.jpg";
import Carousel from "@/components/home/Carousel/Carousel";
import FeaturedProjects from "@/components/home/FeaturedProjects/FeaturedProjects";
import { fetchProjects } from "@/contentful/Project";

export default async function home() {
  const response = await fetchProjects();
  const propertyList = response.filter((project) => project.featured);
  const carouselItems = response.filter((project) => project.carouselItem);

  return (
    <main>
      <section className={`bottom-spacing ${styles.carouselSection}`}>
        <Carousel carouselItems={carouselItems} />
      </section>
      <TwoColTextWithImage
        variant="narrowImage"
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
          enableAnimation={true}
        />
      </section>
      <FeaturedProjects projectList={propertyList} />
    </main>
  );
}
