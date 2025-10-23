import React from "react";

export default function CVPage() {
  return (
    <div className="min-h-screen text-gray-200 bg-gradient-to-b from-[#0a0f2c] via-[#0b0e1f] to-black px-6 py-10">
      {/* Header / Hero */}
      <section className="text-center mb-12 bg-gradient-to-r from-blue-700/30 via-blue-500/10 to-transparent rounded-2xl p-8 shadow-lg">
        <img
          src="/qa.png"
          alt="Fernando Campos"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4 shadow-md"
        />
        <h1 className="text-4xl font-bold text-blue-300 mb-2">Fernando Campos</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Versatile QA Engineer with over 10 years of experience in both manual and automated
testing. Skilled in designing test strategies, executing functional and exploratory tests, and
developing automation for UI, API, backend, and performance validations. Adept at working
in Agile environments and collaborating with cross-functional teams to ensure timely and
high-quality software releases. Passionate about quality, efficiency, and continuous
improvement.
        </p>
      </section>

      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 shadow-md hover:shadow-blue-800/40 transition">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Technical Skills</h3>
          <ul className="text-gray-300 list-disc list-inside leading-relaxed">
            <li>Languages: TypeScript, Java, SQL</li>
            <li>Testing: Playwright, Pactum, Jest, RestAssured, Postman</li>
            <li>CI/CD: Concourse</li>
            <li>Tools: Xray, Confluence, Git, VSCode</li>
            <li>Frameworks: POM, TailwindCSS, Jest</li>
          </ul>
        </div>

        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 shadow-md hover:shadow-blue-800/40 transition">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Manual QA Skills</h3>
          <ul className="text-gray-300 list-disc list-inside leading-relaxed">
            <li>Requirement analysis & test case design</li>
            <li>Defect tracking & exploratory testing</li>
            <li>Regression and UAT support</li>
            <li>Test reporting and documentation</li>
          </ul>
        </div>

        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 shadow-md hover:shadow-blue-800/40 transition">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Soft Skills</h3>
          <ul className="text-gray-300 list-disc list-inside leading-relaxed">
            <li>Analytical thinking and attention to detail</li>
            <li>Effective communication with cross-functional teams</li>
            <li>Self-learning and adaptability</li>
            <li>Time management and ownership</li>
          </ul>
        </div>

        <div className="bg-blue-900/10 border border-blue-700 rounded-xl p-6 shadow-md hover:shadow-blue-800/40 transition">
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Languages</h3>
          <ul className="text-gray-300 list-disc list-inside leading-relaxed">
            <li>Spanish: Native</li>
            <li>English: Intermediate to Advanced</li>
          </ul>
        </div>
      </div>

      {/* Experience Timeline */}
      <section className="relative border-l border-blue-700 pl-10 mb-12">
        <h2 className="text-2xl font-semibold text-blue-300 mb-6">Experience</h2>

        <div className="space-y-10">
          <div className="relative">
            <div className="absolute -left-[15px] top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-blue-300">
              QA Engineer (Manual & Automation) — VWFS México
            </h3>
            <span className="text-gray-400 text-sm">2023 – Present</span>
            <p className="text-gray-300 text-base mt-1">
              Developed test frameworks for API and frontend automation using Playwright, Pactum, and Jest.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[15px] top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-blue-300">
              Data QA Engineer — DIGITAL@FEMSA
            </h3>
            <span className="text-gray-400 text-sm">2022 – 2023</span>
            <p className="text-gray-300 text-base mt-1">
              Led data pipeline testing using SQL, AWS, and GCP; automated validations with Great Expectations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[15px] top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-blue-300">
              QA Analyst — OpenGov by Terminal
            </h3>
            <span className="text-gray-400 text-sm">2019 – 2022</span>
            <p className="text-gray-300 text-base mt-1">
              Conducted manual and regression testing; optimized repetitive flows via Ghost Inspector automation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[15px] top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-blue-300">
              QA Engineer (SDET) — HCL / AMDOCS / HP
            </h3>
            <span className="text-gray-400 text-sm">2014 – 2019</span>
            <p className="text-gray-300 text-base mt-1">
              Built Java-based frameworks with Selenium and Maven for data-driven testing and CI/CD integration.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[15px] top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-blue-300">
              Manual QA & Test Lead Roles — Alcatel / IBM / Intel / BOA-TCS / Apptio / Dextra / Lazlo
            </h3>
            <span className="text-gray-400 text-sm">2007 – 2014</span>
            <p className="text-gray-300 text-base mt-1">
              Designed and executed manual test plans, mentored junior testers, and led regression cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4 border-b border-blue-500 pb-1">
          Education
        </h2>
        <p className="text-gray-300">
          Bachelor Degree in Computer Science — Universidad de Guadalajara
        </p>
      </section>

      {/* Download CV */}
      <div className="text-center mt-10">
        <a
          href="/Fernando_Campos_Resume.pdf"
          download
          className="inline-flex items-center gap-2 border border-blue-500 text-blue-300 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-black transition"
        >
          <span>📄 Download Resume</span>
        </a>
      </div>
    </div>
  );
}