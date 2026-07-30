import React from "react";
import type { IconType } from "react-icons";

interface SkillCardProps {
  Icon: IconType;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, name }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 bg-opacity-95 border border-white/10 rounded-lg shadow-xl hover:shadow-2xl hover:border-indigo-500/40 transition duration-300 transform hover:scale-105">
      <Icon className="text-6xl mb-3 text-white" />
      <p className="text-lg font-semibold text-white">{name}</p>
    </div>
  );
};

export default SkillCard;
