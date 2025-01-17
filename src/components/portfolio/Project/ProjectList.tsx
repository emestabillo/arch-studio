"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.scss";
import { ProjectProps } from "@/contentful/Project";
import staggerAnimation from "@/utils/animations/staggerAnimation";

interface ProjectListProps {
  projectList: ProjectProps[];
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
          key={project.propertyName}
          variant="defaultCard"
          propertyName={project.propertyName}
          dateBuilt={project.dateBuilt}
          imageSrcDesktop={`https:${project.imageSrcDesktop?.src}`}
          imageSrcTablet={`https:${project.imageSrcTablet?.src}`}
          imageSrcMobile={`https:${project.imageSrcMobile?.src}`}
        />
      ))}
    </ul>
  );
}
