"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.scss";
import staggerAnimation from "@/utils/animations/staggerAnimation";

interface Project {
  projectTitle: string;
  subHeading: string;
  imageSrcDesktop: string;
  imageSrcTablet: string;
  imageSrcMobile: string;
  featured?: boolean;
}

interface ProjectListProps {
  projectList: Project[];
}

export default function ProjectList({ projectList }: ProjectListProps) {
  const containerRef = useRef<HTMLUListElement>(null);
  useGSAP(
    () => {
      if (containerRef.current) {
        staggerAnimation(containerRef.current);
      }
    },
    { scope: containerRef }
  );

  return (
    <ul ref={containerRef} className={styles.grid}>
      {projectList.map((project) => (
        <ProjectCard
          key={project.projectTitle}
          variant="defaultCard"
          projectTitle={project.projectTitle}
          subHeading={project.subHeading}
          imageSrcDesktop={project.imageSrcDesktop}
          imageSrcTablet={project.imageSrcTablet}
          imageSrcMobile={project.imageSrcMobile}
        />
      ))}
    </ul>
  );
}
