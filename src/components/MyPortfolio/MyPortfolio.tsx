import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import { useTranslation } from "react-i18next";

const MyPortfolio: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="container mx-auto py-20 px-6 md:px-10">
      <h2 className="text-4xl font-bold text-indigo-400 mb-2 text-center pb-2">
        {t("projects_title")}
      </h2>
      <p className="text-white text-center pb-8">{t("projects_intro")}</p>
      <div className="text-indigo-400 text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl mb-2">{t("projects_sub_title")}</h3>
        <p className="text-white mb-4">{t("projects_description")}</p>
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
