import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectList } from "@/data/portfolio";
import styles from "./portfolio.module.scss";

export default function portfolio() {
  return (
    <ul className={`container ${styles.grid}`}>
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
