import React from "react";
import { useState, useEffect } from "react";
import { type IconType } from "react-icons";

interface NavLink {
  path: string;
  label: string;
  icon: IconType;
}

interface NavbarProps {
  title: string;
  links: NavLink[];
  activeSection: string;
  currentLang: string;
  onToggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  links,
  activeSection,
  currentLang,
  onToggleLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = isScrolled
    ? "bg-gray-800 bg-opacity-95 shadow-md backdrop-blur-sm transition duration-300"
    : "bg-transparent shadow-none transition duration-300";

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document
      .getElementById(id.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const getLinkClasses = (path: string) =>
    activeSection === path
      ? "text-white bg-indigo-700 font-bold shadow-lg shadow-indigo-500/50"
      : "text-indigo-400 hover:bg-indigo-700 hover:bg-opacity-20 hover:text-white font-medium";
  return (
    <nav className={`fixed top-0 w-full z-50 text-white ${navbarClasses}`}>
      <div className="flex justify-between items-center py-6 px-10">
        <div className="text-2xl font-semibold text-indigo-400">
          <h1>{title}</h1>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          {links.map((link) => {
            const { icon: IconComponent } = link;
            return (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={scrollToSection(link.path)}
                  className={`transition duration-300 px-3 py-2 rounded-lg flex items-center space-x-2 text-sm ${getLinkClasses(link.path)}`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
          <li>
            <button
              onClick={onToggleLanguage}
              className="ml-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-md border border-indigo-400/50 transition duration-300 uppercase shadow-md"
            >
              {currentLang === "hr" ? "EN" : "HR"}
            </button>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden text-indigo-400 p-1"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      <ul
        className={`${isMenuOpen ? "flex" : "hidden"} md:hidden flex-col px-6 pb-4 space-y-1`}
      >
        {links.map((link) => {
          const { icon: IconComponent } = link;
          return (
            <li key={link.path}>
              <a
                href={link.path}
                onClick={scrollToSection(link.path)}
                className={`transition duration-300 px-3 py-2.5 rounded-lg flex items-center space-x-3 text-sm ${getLinkClasses(link.path)}`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            </li>
          );
        })}
        <li>
          <button
            onClick={onToggleLanguage}
            className="mt-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-md border border-indigo-400/50 transition duration-300 uppercase shadow-md"
          >
            {currentLang === "hr" ? "EN" : "HR"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
