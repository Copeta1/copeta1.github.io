import React from "react";
import ProfilePic from "../../assets/me.jpg";
import CV from "../../assets/CV.pdf";
import { FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiXcode, SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { type IconType } from "react-icons";
import SkillCard from "./SkillCard";
import Skills from "./Skills";

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
                Robert Pecolaj | Frontend & Mobile Developer & Multimedijski
                Stručnjak
              </h3>

              <p className="text-lg mb-6 text-center">
                Diplomirani sam inženjer Multimedije sa Sveučilišta Sjever,
                posvećen kreiranju modernih, funkcionalnih i vizualno privlačnih
                digitalnih rješenja. Kombiniram formalno obrazovanje iz
                multimedije i estetike dizajna s intenzivnim fokusom na Frontend
                i Mobile Developer ulogu, što mi omogućuje da s lakoćom
                povezujem dizajn i funkcionalnost.
              </p>
              <div className="mt-8 pt-2">
                <a
                  href={CV}
                  download="RobertPecolaj_CV"
                  className="inline-block bg-indigo-600 text-white text-lg font-bold transition duration-300 
                                       px-8 py-3 rounded-lg shadow-xl hover:bg-indigo-700 transform hover:scale-105"
                >
                  Preuzmi moj CV
                </a>
              </div>
            </div>
          </div>
          <div className="mt-24 text-center">
            <h3 className="text-5xl font-bold text-indigo-400">
              ALATI I VJEŠTINE
            </h3>
            <h4 className="text-3xl font-semibold text-indigo-400 mt-12">
              Alati
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
              Vještine
            </h4>
          </div>

          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
