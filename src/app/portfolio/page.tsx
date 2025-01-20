import ProjectList from "../../components/portfolio/Project/ProjectList";
import { fetchProjects } from "../../contentful/Project";

export default async function portfolio() {
  const propertyList = await fetchProjects();

  return (
    <section className="container">
      <ProjectList projectList={propertyList} />
    </section>
  );
}
