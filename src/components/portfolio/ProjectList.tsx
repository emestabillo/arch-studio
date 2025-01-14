"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.scss";
import staggerAnimation from "@/utils/animations/staggerAnimation";

interface ImageField {
  fields: {
    file: {
      url: string;
    };
  };
}
interface Project {
  propertyName: string;
  dateBuilt: string;
  imageSrcDesktop: ImageField;
  imageSrcTablet: ImageField;
  imageSrcMobile: ImageField;
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
          key={project.propertyName}
          variant="defaultCard"
          propertyName={project.propertyName}
          dateBuilt={project.dateBuilt}
          imageSrcDesktop={`https:${project.imageSrcDesktop.fields.file.url}`}
          imageSrcTablet={`https:${project.imageSrcTablet.fields.file.url}`}
          imageSrcMobile={`https:${project.imageSrcMobile.fields.file.url}`}
        />
      ))}
    </ul>
  );
}
