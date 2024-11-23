"use client";

import ProjectCard from "@/components/ProjectList/ProjectCard";
import styles from "./ProjectList.module.scss";
import useCardAnimation from "@/hooks/useCardAnimation";

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
  const containerRef = useCardAnimation<HTMLUListElement>();

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
