import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 text-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-400 mb-4">
          {t("contact_title")}
        </h2>
        <p className="text-lg text-gray-300 mb-10">{t("contact_desc")}</p>
        <a
          href="mailto:pecolajrobert1@gmail.com"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold px-10 py-4 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 mb-4"
        >
          <FaEnvelope className="inline mr-2 mb-1" />
          {t("contact_button")}
        </a>
        <p className="text-gray-300 mb-10">
          <a
            href="mailto:pecolajrobert1@gmail.com"
            className="hover:text-white transition duration-300"
          >
            pecolajrobert1@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-8 mt-4">
          <a
            href="https://github.com/Copeta1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-pecolaj-15a1351a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
