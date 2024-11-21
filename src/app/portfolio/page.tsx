import { projectList } from "@/data/portfolio";
import ProjectList from "@/components/ProjectList/ProjectList";

export default function portfolio() {
  return (
    <section className="container">
      <ProjectList projectList={projectList} />
    </section>
  );
}
