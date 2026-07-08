import React, { useState } from "react";
import Skillbar from "./Skillbar";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiVite,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiDotnet,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { type IconType } from "react-icons";

interface SkillDetail {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "General";
  Icon: IconType;
}

const ALL_SKILLS: SkillDetail[] = [
  // FRONTEND
  { name: "HTML5", level: 90, category: "Frontend", Icon: FaHtml5 },
  { name: "CSS3", level: 88, category: "Frontend", Icon: FaCss3Alt },
  {
    name: "JavaScript",
    level: 85,
    category: "Frontend",
    Icon: IoLogoJavascript,
  },
  {
    name: "TypeScript",
    level: 80,
    category: "Frontend",
    Icon: BiLogoTypescript,
  },
  { name: "React.js", level: 90, category: "Frontend", Icon: FaReact },
  { name: "Next.js", level: 90, category: "Frontend", Icon: RiNextjsFill },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "Frontend",
    Icon: RiTailwindCssFill,
  },
  { name: "Bootstrap", level: 75, category: "Frontend", Icon: FaBootstrap },
  { name: "Vite", level: 80, category: "Frontend", Icon: SiVite },

  // BACKEND
  { name: "Node.js", level: 75, category: "Backend", Icon: FaNodeJs },
  { name: "Express.js", level: 70, category: "Backend", Icon: SiExpress },
  { name: "MongoDB", level: 60, category: "Backend", Icon: SiMongodb },
  { name: "MySQL", level: 50, category: "Backend", Icon: SiMysql },

  // GENERALNO
  {
    name: "Git & GitHub",
    level: 90,
    category: "General",
    Icon: FaGithub,
  },
  {
    name: "React Native",
    level: 90,
    category: "General",
    Icon: TbBrandReactNative,
  },
  { name: ".NET / C#", level: 30, category: "Backend", Icon: SiDotnet },
];

interface SkillButton {
  label: string;
  filter: SkillDetail["category"];
}

const SKILL_BUTTONS: SkillButton[] = [
  { label: "Front-end", filter: "Frontend" },
  { label: "Back-end", filter: "Backend" },
  { label: "General", filter: "General" },
];

const BASE_BUTTON_CLASSES =
  "transition duration-300 font-bold py-2 px-4 rounded-full shadow-lg w-full md:w-auto";

const COLOR_CLASSES = "bg-gray-700 hover:bg-indigo-700";

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] =
    useState<SkillDetail["category"]>("Frontend");

  const filteredSkills = ALL_SKILLS.filter(
    (skill) => skill.category === activeFilter,
  );

  const getButtonClasses = (filter: SkillDetail["category"]) => {
    const isActive = filter === activeFilter;
    const activeColor = "bg-indigo-600 hover:bg-indigo-700";
    const inactiveColor = COLOR_CLASSES;

    return `${BASE_BUTTON_CLASSES} ${isActive ? activeColor : inactiveColor}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-6 text-white">
        {SKILL_BUTTONS.map((button) => (
          <button
            key={button.label}
            className={getButtonClasses(button.filter)}
            onClick={() => setActiveFilter(button.filter)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <Skillbar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            Icon={skill.Icon}
          />
        ))}
        {filteredSkills.length === 0 && (
          <p className="text-white text-lg text-center col-span-full">
            Nema dostupnih vještina u ovoj kategoriji.
          </p>
        )}
      </div>
    </div>
  );
};

export default Skills;
