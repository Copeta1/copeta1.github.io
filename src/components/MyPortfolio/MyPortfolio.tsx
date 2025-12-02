import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const MyPortfolio: React.FC = () => {
  return (
    <section id="projects" className="container mx-auto md:p-8">
      <h1 className="text-4xl font-bold text-indigo-400 mb-2 text-center pb-8">
        Moji Projekti
      </h1>
      <div className="text-indigo-400 text-center">
        <h2 className="text-2xl mb-2">
          Napomena o Demo Verziji i Učitavanju Servera
        </h2>
        <p className="text-white mb-4 px-24">
          Prvi pokušaj prijave ili interakcije s aplikacijom nakon dulje pauze
          može potrajati 15 do 30 sekundi dok se Back-end server ponovno
          pokrene. Molimo Vas za strpljenje. Nakon tog prvog pokretanja,
          aplikacija će raditi normalnom brzinom.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
