import React from "react";
import ProfilePic from "../../assets/me.jpg";
import CV from "../../assets/CV_HR.pdf";
import CV_ENG from "../../assets/CV-ENG.pdf";
import { FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiXcode, SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { type IconType } from "react-icons";
import SkillCard from "./SkillCard";
import Skills from "./Skills";
import { useTranslation } from "react-i18next";

interface Skill {
  Icon: IconType;
  name: string;
}

const SKILLS: Skill[] = [
  { Icon: VscVscode, name: "Visual Studio Code" },
  { Icon: SiXcode, name: "Xcode" },
  { Icon: FaGitAlt, name: "Git" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: FaFigma, name: "Figma" },
  { Icon: SiAdobephotoshop, name: "Photoshop" },
];

const About: React.FC = () => {
  const { t, i18n } = useTranslation();

  const currentCV = i18n.language === "hr" ? CV : CV_ENG;
  const downloadName =
    i18n.language === "hr" ? "RobertPecolaj_CV_HR" : "RobertPecolaj_CV_EN";

  return (
    <section
      id="about"
      className="relative flex items-center justify-center p-10 py-20 text-white"
    >
      <div className="max-w-6xl w-full">
        <div className="text-white">
          <div className="flex flex-col md:flex-row gap-12">
            {/* LIJEVO */}
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <img
                src={ProfilePic}
                alt="Robert Pecolaj - Profilna slika"
                className="rounded-xl shadow-2xl w-full max-w-sm"
              />
            </div>

            {/* DESNO */}
            <div className="md:w-2/3 text-center">
              <h3 className="text-3xl font-bold text-indigo-400 mb-4">
                {t("about_title")}
              </h3>

              <p className="text-lg mb-6 text-center md:text-left">
                {t("about_description")}
              </p>
              <div className="mt-8 pt-2">
                <a
                  href={currentCV}
                  download={downloadName}
                  className="inline-block bg-indigo-600 text-white text-lg font-bold transition duration-300 
                                       px-8 py-3 rounded-lg shadow-xl hover:bg-indigo-700 transform hover:scale-105"
                >
                  {t("about_button")}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24 text-center">
            <h3 className="text-5xl font-bold text-indigo-400">
              {t("tools_skills_title")}
            </h3>
            <h4 className="text-3xl font-semibold text-indigo-400 mt-12">
              {t("tools_subtitle")}
            </h4>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {SKILLS.map((Skill) => (
                <SkillCard
                  key={Skill.name}
                  Icon={Skill.Icon}
                  name={Skill.name}
                />
              ))}
            </div>

            <h4 className=" text-3xl font-semibold text-indigo-400 mt-12">
              {t("skills_subtitle")}
            </h4>
          </div>

          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
