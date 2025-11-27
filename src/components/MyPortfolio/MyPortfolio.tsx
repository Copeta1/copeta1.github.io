import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const MyPortfolio: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto md:p-8">
      <h1 className="text-4xl font-bold text-indigo-400 mb-2 text-center pb-8">
        Moji Projekti
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
