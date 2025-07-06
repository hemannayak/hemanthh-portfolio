import React from "react";
import ME from "../../assets/Hemanth.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I’m <strong>Pangoth Hemanth Nayak</strong>, a pre-final year B.Tech
            student in <strong>CSE – Data Science</strong> at{" "}
            <strong>HITAM</strong>, currently serving as the{" "}
            <strong>Student HOD</strong> of my department. I’m passionate about
            using tech to solve real problems and represent student voices with
            purpose and impact.
          </p>

          <p>
            I’ve worked on full-stack and data-focused projects during
            internships in <strong>Web Development</strong>,{" "}
            <strong>AI Prompt Engineering</strong>, and{" "}
            <strong>Data Analytics</strong>. I build with
            <strong> HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>Python</strong>, and{" "}
            <strong>Java</strong>. I’m now diving deeper into{" "}
            <strong>DSA in Java</strong> and strengthening my core development
            skills.
          </p>

          <p>
            I’m also exploring areas like <strong>Machine Learning</strong>,{" "}
            <strong>Data Visualization</strong>, and <strong>SQL</strong> with
            tools like <strong>Tableau</strong> and <strong>Excel</strong>. I
            don’t know <strong>MERN</strong> or <strong>Cloud</strong> yet — but
            they’re on my radar and part of my 2025 learning goals.
          </p>

          <p>
            Beyond tech, I express myself through writing as{" "}
            <strong>@hem_writess</strong>, where I turn raw emotions into poetry
            that feels personal. I'm someone who learns out loud, leads with
            empathy, and codes with curiosity.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
