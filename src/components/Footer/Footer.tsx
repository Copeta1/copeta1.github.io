import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Copeta1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/robert-pecolaj-15a1351a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Robert Pecolaj. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
