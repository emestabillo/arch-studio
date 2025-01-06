import { projectList } from "@/utils/data/portfolio";
import ProjectList from "@/components/portfolio/ProjectList";

export default function portfolio() {
  return (
    <section className="container">
      <ProjectList projectList={projectList} />
    </section>
  );
}
