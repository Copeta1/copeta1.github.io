import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BULLET_KEYS = [
  "availability_bullet_1",
  "availability_bullet_2",
  "availability_bullet_3",
  "availability_bullet_4",
];

const Availability: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="availability"
      className="container mx-auto py-20 px-6 md:px-10 text-white"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-10 text-center pb-4">
        {t("availability_title")}
      </h2>
      <div className="max-w-2xl mx-auto bg-gray-900/60 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-10">
        <ul className="space-y-4">
          {BULLET_KEYS.map((key) => (
            <li key={key} className="flex items-start gap-3">
              <FaCheckCircle className="text-indigo-400 text-lg mt-1 shrink-0" />
              <span className="text-left">{t(key)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Availability;
