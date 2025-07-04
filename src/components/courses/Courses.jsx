import React from "react";
import IMG1 from "../../assets/Swecha.jpeg";
import IMG2 from "../../assets/LinkedinL.png";
import IMG3 from "../../assets/Google.png";
import IMG5 from "../../assets/Deloitte.png";
import IMG6 from "../../assets/Deloitte.png";
import IMG7 from "../../assets/LinkedinL.png";
import IMG8 from "../../assets/Deloitte.png";
import IMG9 from "../../assets/Infosyss.png"
import IMG10 from "../../assets/Cisci.png";

import "./courses.css";

const courses = () => {
  const course = [
    {
      id: 10,
      title: "Deloitte Australia - Data Analytics Job Simulation",
      img: IMG5,
      link: "https://drive.google.com/file/d/1A5qgGxGC_vVwAoRO3j5v5fTbuvxI5Fn2/view?usp=sharing",
    },
    {
      id: 9,
      title:
        "Introduction to Data ScienceAccenture UK - Introduction to Technology Apprenticeship Job Simulation",
      img: IMG6,
      link: "https://drive.google.com/file/d/1j5KOnZAIa5caiK4XbjwnG9vPv8loabZ9/view?usp=sharing",
    },
    {
      id: 8,
      title: "Deloitte Australia - Technology  Job Simulation",
      img: IMG8,
      link: "https://drive.google.com/file/d/1i1LoviGH3xB9RElJXHlN90eth88dOfWy/view?usp=sharing",
    },
    {
      id: 7,
      title: "CSS Fundamentals - Linkedin Learning",
      img: IMG7,
      link: "https://drive.google.com/file/d/1gTiYqJeV76M0W2X40w68mMGWErfXWI-G/view?usp=sharing",
    },
    {
      id: 5,
      title: "HTML Essential Training - Linkedin Learning",
      img: IMG2,
      link: "https://drive.google.com/file/d/15XRsbuas-yLMTaQ9SKdklnzsyOko1Mhl/view?usp=sharing",
    },
    {
      id: 4,
      title: "Introduction to Generative AI - Google",
      img: IMG3,
      link: "https://www.cloudskillsboost.google/public_profiles/4be8e0c8-981a-40a3-8314-144bdfb4dd58",
    },
    {
      id: 1,
      title: "AI Creators Internship - Swecha Telangana",
      img: IMG1,
      link: "https://drive.google.com/file/d/1gwLz3bzT6dD_jg-qQ6Mzc_wxlUrnj3UE/view?usp=sharing",
    },
    {
      id: 2,
      title: "Programming in C - Infosys Springboard",
      img: IMG9,

      link: "https://drive.google.com/file/d/11ScUC_BegyWov6mopt0h4toclgriYXJ8/view?usp=sharing",
    },
    {
      id: 3,
      title: "PCAP: Programming Essentials in Python",
      img: IMG10,

      link: "https://drive.google.com/file/d/1blixYrFxDN2IVadpohxnPkZld3wNiMaf/view?usp=sharing",
    },
  ];

  return (
    <section id="course">
      <div id="work">
        <h3>Courses / certifications</h3>
      </div>

      <div className="container course__container">
        {course.map((pro) => (
          <article className="course__item" key={pro.id}>
            <div className="course__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="course__item-content">
              <h3>{pro.title}</h3>
            </div>
            <div className="course__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Certificate
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default courses;
