"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { projectList } from "@/utils/data/portfolio";
import ProjectCard from "../../portfolio/ProjectCard";
import Button from "@/components/ui/Button/Button";
import styles from "./FeaturedProjects.module.scss";
import arrow from "../../../../public/icons/icon-arrow.svg";
import { fadeInUpAnimation } from "@/utils/animations/fadeInUpAnimation";

export default function FeaturedProjects() {
  const featuredProjects = projectList.filter((project) => project.featured);

  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      fadeInUpAnimation(containerRef);
    },
    { scope: containerRef }
  );

  return (
    <section
      className={`container top-spacing ${styles.featuredSection}`}
      ref={containerRef}
    >
      <h2>Featured</h2>
      <ul className={styles.featuredCardsContainer}>
        {featuredProjects.map((project) => (
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
  );
}
