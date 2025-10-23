import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/mindmap" },
  ];

  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-black bg-opacity-90 border-b border-blue-900 shadow-md sticky top-0 z-50">
      <h1 className="text-white font-bold text-lg tracking-wide">Fernando Campos</h1>

      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `transition-all duration-300 ${
                isActive
                  ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                  : "text-gray-300 hover:text-blue-400"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Icons */}
        <div className="flex gap-4 ml-4">
          <a
            href="https://github.com/refnando"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/fernando-campos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}