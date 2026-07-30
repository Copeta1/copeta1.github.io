import Navbar from "./components/Navbar/Navbar";
import BackgroundImage from "./assets/bg.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import Availability from "./components/Availability/Availability";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const CONTACT_EMAIL = "pecolajrobert1@gmail.com";

const TypewriterComponent = () => {
  const { t } = useTranslation();
  const [text] = useTypewriter({
    words: ["Robert Pecolaj", t("hero_word_role1"), t("hero_word_role2")],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <h1 className="text-6xl font-bold">
      {t("hero_greeting")}
      <span className="text-6xl text-indigo-400 font-bold">{text}</span>
      <Cursor cursorStyle="|" />
    </h1>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const section = ["home", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 },
    );
    section.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === "hr" ? "en" : "hr";
    i18n.changeLanguage(nextLang);
  };

  const Navlinks = [
    { path: "#home", label: t("nav_home"), icon: FaHome },
    { path: "#about", label: t("nav_about"), icon: FaUser },
    { path: "#projects", label: t("nav_projects"), icon: FaFolderOpen },
    { path: "#contact", label: t("nav_contact"), icon: FaEnvelope },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
        }}
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 pointer-events-none"></div>
        <Navbar
          title="Robert Pecolaj"
          links={Navlinks}
          activeSection={activeSection}
          currentLang={i18n.language}
          onToggleLanguage={toggleLanguage}
        />
        <div className="relative z-10">
          <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-white p-10 pt-20"
          >
            <div className="relative z-10 text-center max-w-4xl">
              <TypewriterComponent key={i18n.language} />
              <div className="mt-8 text-xl">
                <p>{t("hero_desc")}</p>
              </div>
              <div className="py-8">
                <a
                  href="#about"
                  className="inline-block bg-indigo-600 text-white text-lg font-bold transition duration-300 
                     px-8 py-3 rounded-lg shadow-xl hover:bg-indigo-700 transform hover:scale-105"
                >
                  {t("hero_button")}
                </a>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <a
                  href="https://github.com/Copeta1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-400 transition duration-300"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/robert-pecolaj-15a1351a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-400 transition duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-white hover:text-indigo-400 transition duration-300"
                >
                  <FaEnvelope className="text-3xl" />
                  <span className="text-lg">{CONTACT_EMAIL}</span>
                </a>
              </div>
            </div>
          </section>

          <Experience />

          <About />

          <MyPortfolio />

          <Availability />

          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
