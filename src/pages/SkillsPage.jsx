// Skills page

import React from "react";

const techSkills = [
  "TypeScript",
  "JavaScript",
  "Playwright",
  "Pactum",
  "Jest",
  "Java",
  "RestAssured",
  "Postman",
  "SQL",
  "CI/CD",
  "Xray",
  "Confluence",
];

const manualTestingSkills = [
  "Test Case Design",
  "Bug Reporting",
  "Regression Testing",
  "Exploratory Testing",
  "User Acceptance Testing (UAT)",
  "Cross-Browser Testing",
  "Mobile Testing",
  "Test Execution",
];

const softSkills = [
  "Analytical Thinking",
  "Attention to Detail",
  "Team Collaboration",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Continuous Learning",
];

const SkillSection = ({ title, items }) => (
  <div className="mb-10">
    <h2 className="text-2xl font-semibold text-blue-300 mb-4">{title}</h2>
    <div className="flex flex-wrap gap-4 justify-center">
      {items.map((item, idx) => (
        <span
          key={idx}
          className="bg-blue-700 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-blue-300 mb-8 border-b border-blue-500 pb-2 text-center">
        Skills
      </h1>

      <SkillSection title="Tech Stack" items={techSkills} />
      <SkillSection title="Manual Testing Skills" items={manualTestingSkills} />
      <SkillSection title="Soft Skills" items={softSkills} />
    </div>
  );
}
