import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
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
            I’m a pre-final year Computer Science and Engineering (Data Science)
            student at{" "}
            <strong>
              Hyderabad Institute of Technology and Management (HITAM)
            </strong>
            , deeply passionate about building real-world tech that makes a
            difference. From classrooms to code, I strive to turn ideas into
            impactful digital experiences.
          </p>

          <p>
            With a solid foundation in programming languages like{" "}
            <strong>Java</strong>, <strong>Python</strong>, and{" "}
            <strong>C</strong>, I’ve worked on full-stack projects using both
            the <strong>MERN stack</strong> and <strong>Django</strong>. I'm
            also familiar with <strong>Agile methodologies</strong> and love
            collaborating on scalable, user-focused products.
          </p>

          <p>
            My interest extends to <strong>machine learning</strong> and{" "}
            <strong>deep learning</strong>, where I’ve used tools like{" "}
            <strong>scikit-learn</strong> and <strong>TensorFlow</strong> to
            solve real-world problems. I'm gaining hands-on experience with{" "}
            <strong>cloud platforms</strong> like <strong>AWS</strong> and{" "}
            <strong>Google Cloud</strong>, and exploring{" "}
            <strong>DevOps tools</strong> for seamless CI/CD workflows. With
            growing exposure to <strong>networking</strong> concepts and{" "}
            <strong>data systems</strong>, I’m continuously evolving my skill
            set to tackle tomorrow’s challenges.
          </p>

          {/* <p>In addition to my programming skills, I am well-versed in machine learning, utilizing frameworks such as scikit-learn and TensorFlow to create intelligent solutions. Furthermore, I possess proficiency in cloud computing, having hands-on experience with Google Cloud Computing.</p> */}
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
