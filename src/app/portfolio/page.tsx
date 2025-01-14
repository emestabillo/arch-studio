import ProjectList from "@/components/portfolio/ProjectList";
import { getProject } from "../../utils/contentful";

export default async function portfolio() {
  const propertyList = await getProject();
  // console.log("Pl:", propertyList);
  return (
    <section className="container">
      <ProjectList projectList={propertyList} />
    </section>
  );
}
