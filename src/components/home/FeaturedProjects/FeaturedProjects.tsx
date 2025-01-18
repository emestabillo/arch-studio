"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
// import { projectList } from "@/utils/data/portfolio";
import ProjectCard from "../../portfolio/Project/ProjectCard";
import Button from "@/components/ui/Button/Button";
import styles from "./FeaturedProjects.module.scss";
import arrow from "../../../../public/icons/icon-arrow.svg";
import { fadeInUpAnimation } from "@/utils/animations/fadeInUpAnimation";
import { ProjectProps } from "@/contentful/Project";
interface ProjectListProps {
  projectList: ProjectProps[];
}

export default function FeaturedProjects({ projectList }: ProjectListProps) {
  // const featuredProjects = projectList.filter((project) => project.featured);

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
        {projectList.map((project) => (
          <ProjectCard
            key={project.propertyName}
            variant="numberedCard"
            propertyName={project.propertyName}
            dateBuilt={project.dateBuilt}
            imageSrcDesktop={`https:${project.imageSrcDesktop?.src}`}
            imageSrcTablet={`https:${project.imageSrcTablet?.src}`}
            imageSrcMobile={`https:${project.imageSrcMobile?.src}`}
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
