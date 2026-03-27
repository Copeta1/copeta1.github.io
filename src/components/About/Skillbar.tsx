import React from "react";
import { type IconType } from "react-icons";

interface SkillbarProps {
  name: string;
  level: number;
  Icon: IconType;
}

const Skillbar: React.FC<SkillbarProps> = ({ name, level, Icon }) => {
  return (
    <div className="p-4 bg-gray-800 bg-opacity-80 rounded-lg shadow-xl">
      <div className="flex items-center gap-2">
        <Icon className="text-2xl text-indigo-400" />
        <span className="text-md font-semibold text-white">{name}</span>
      </div>

      <div className="w-full bg-gray-600 rounded-full h-2.5 my-4">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
        <div className="text-right">
          <span className="text-md font-bold text-indigo-400">{level}%</span>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;
