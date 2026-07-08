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
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const TypewriterComponent = () => {
  const [text] = useTypewriter({
    words: ["Robert Pecolaj", "A Full-Stack Developer", "A Mobile Developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <div className="text-6xl font-bold">
      {"Hey, I am  "}
      <span className="text-6xl text-indigo-400 font-bold">{text}</span>
      <Cursor cursorStyle="|" />
    </div>
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
          backgroundAttachment: "fixed",
        }}
        className="relative min-h-screen"
      >
        <div className="absolute inset-0 opacity-60 pointer-events-none"></div>
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
              <TypewriterComponent />
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
              <div className="flex justify-center gap-6">
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
              </div>
            </div>
          </section>

          <About />

          <MyPortfolio />

          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
