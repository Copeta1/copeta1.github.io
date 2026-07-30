import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BULLET_KEYS = [
  "experience_bullet_1",
  "experience_bullet_2",
  "experience_bullet_3",
  "experience_bullet_4",
  "experience_bullet_5",
];

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="container mx-auto py-20 px-6 md:px-10 text-white"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-2 text-center pb-4">
        {t("experience_title")}
      </h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-10">
        {t("experience_intro")}
      </p>
      <div className="max-w-3xl mx-auto bg-gray-900/60 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-10">
        <ul className="space-y-4 mb-8">
          {BULLET_KEYS.map((key) => (
            <li key={key} className="flex items-start gap-3">
              <FaCheckCircle className="text-indigo-400 text-lg mt-1 shrink-0" />
              <span className="text-left">{t(key)}</span>
            </li>
          ))}
        </ul>
        <p className="text-center text-gray-400 italic">
          {t("experience_footer")}
        </p>
      </div>
    </section>
  );
};

export default Experience;
