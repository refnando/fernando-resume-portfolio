// Projects page

import React from "react";
import { FaVial, FaCodeBranch, FaCogs } from "react-icons/fa";

const projects = [
  {
    title: "RestAssured POC – Simpsons API Testing",
    description:
      "A proof-of-concept API testing framework using Java, RestAssured, JUnit5, and Maven against The Simpsons API.",
    icon: <FaVial className="text-blue-400 text-3xl" />,
    link: "https://github.com/refnando/restassured-poc",
  },
  {
    title: "Pactum + Jest API Testing Framework",
    description:
      "TypeScript-based modular framework for API test automation using PactumJS and Jest. Reusable helpers and report generation.",
    icon: <FaCodeBranch className="text-blue-400 text-3xl" />,
    link: "https://github.com/refnando/pactum-demo",
  },
  {
    title: "Playwright OpenAI Integration",
    description:
      "Automation project using Playwright with OpenAI integration for dynamic test suggestions and results analysis.",
    icon: <FaCogs className="text-blue-400 text-3xl" />,
    link: "https://github.com/refnando/playwright-openai-integration",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-blue-300 mb-6 border-b border-blue-500 pb-2">
        Featured Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-6 rounded-lg border border-blue-500 hover:shadow-lg hover:bg-gray-800 transition duration-300"
          >
            <div className="mb-4">{project.icon}</div>
            <h2 className="text-xl font-semibold text-blue-200 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
