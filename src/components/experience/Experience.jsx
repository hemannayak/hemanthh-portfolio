import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Tech Stack</h2>

      <div className="container experience__container">
        {/* Frontend Development */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {[
              "HTML",
              "HTML5",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Tailwind CSS",
              "TypeScript",
              "Front-End Development",
            ].map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {[
              "Java",
              "C (Programming Language)",
              "SQL",
              "MySQL",
              "Spring Boot",
              "Django",
              "DBMS (Database Management Systems)",
            ].map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* AIML & Data Analytics */}
        <div className="experience__frontend">
          <h3>AI/ML & Data Analytics</h3>
          <div className="experience__content">
            {[
              "Python",
              "Data Analytics",
              "Data Analysis",
              "Data Modeling",
              "Statistics",
              "Spreadsheets",
              "Tableau",
              "Google Gemini",
            ].map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Soft Skills & Leadership */}
        <div className="experience__backend">
          <h3>Leadership & Communication</h3>
          <div className="experience__content">
            {[
              "Communication",
              "Public Speaking",
              "Strategic Planning",
              "Public Relations",
              "Problem Solving",
              "Time Management",
              "Student Leadership",
              "Student Welfare",
              "Student Affairs",
              "Team Management",
              "Project Management",
              "English",
            ].map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Core Tech & Concepts */}
        <div className="experience__frontend">
          <h3>Core Concepts</h3>
          <div className="experience__content">
            {[
              "Computer Science",
              "Networking",
              "Presentations",
              "Dashboards",
              "Web Development",
            ].map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
