import Navbar from "./components/Navbar/Navbar";
import BackgroundImage from "./assets/bg.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";
import About from "./components/About/About";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import { useState } from "react";

const Navlinks = [
  { path: "#home", label: "Naslovna", icon: FaHome },
  { path: "#about", label: "O Meni", icon: FaUser },
  { path: "#projects", label: "Projekti", icon: FaFolderOpen },
];

const TypewriterComponent = () => {
  const [text] = useTypewriter({
    words: ["Robert Pecolaj", "A Web Designer", "A Software Developer"],
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
  const [activeSection] = useState("#home");

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
        />
        <div className="relative z-10">
          <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-white p-10 pt-20"
          >
            <div className="relative z-10 text-center max-w-4xl">
              <TypewriterComponent />
              <div className="mt-8 text-xl">
                <p>
                  Kao Full-Stack Developer, koristim snagu MERN stacka, React.js
                  i React Native-a za izgradnju modernih web stranica i mobilnih
                  aplikacija.
                </p>
              </div>
              <div className="py-8">
                <a
                  href="#about"
                  className="inline-block bg-indigo-600 text-white text-lg font-bold transition duration-300 
                     px-8 py-3 rounded-lg shadow-xl hover:bg-indigo-700 transform hover:scale-105"
                >
                  Pročitajte više
                </a>
              </div>
            </div>
          </section>

          <About />

          <MyPortfolio />
        </div>
      </div>
    </>
  );
};

export default App;
