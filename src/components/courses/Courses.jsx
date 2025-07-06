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
      link: "hhttps://drive.google.com/file/d/1kEcAPN2jIYztFtJXwg5QtwTLTLtrxUOR/view?usp=sharing",
    },
    {
      id: 9,
      title:
        "Accenture UK - Introduction to Technology Apprenticeship Job Simulation",
      img: IMG6,
      link: "https://drive.google.com/file/d/1pga9TUe7z8UNoKxsZ3UmTW9zm4U7XX6R/view?usp=sharing",
    },
    {
      id: 8,
      title: "Deloitte Australia - Technology  Job Simulation",
      img: IMG8,
      link: "https://drive.google.com/file/d/1VvD0VeVNUC2ln83NNigGiS9w2Ijr85FZ/view?usp=sharing",
    },
    {
      id: 7,
      title: "CSS Fundamentals - Linkedin Learning",
      img: IMG7,
      link: "https://drive.google.com/file/d/1QpV7ftaING8HKZJI5qdt5-ExurKFDcYI/view?usp=sharing",
    },
    {
      id: 5,
      title: "HTML Essential Training - Linkedin Learning",
      img: IMG2,
      link: "https://drive.google.com/file/d/1L8u-CIAOYgnjlD5eK-MLEOus640YfQCf/view?usp=sharing",
    },
    {
      id: 4,
      title: "Introduction to Generative AI - Google",
      img: IMG3,
      link: "https://www.cloudskillsboost.google/public_profiles/57aba701-53d4-4f7a-840d-5de145af9f57/badges/11800271?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      id: 1,
      title: "AI Creators Internship - Swecha Telangana",
      img: IMG1,
      link: "https://drive.google.com/file/d/17zkIKuGrb6GoPOMS83DN4Lo2xakPX_4s/view?usp=sharing",
    },
    {
      id: 2,
      title: "Programming in C - Infosys Springboard",
      img: IMG9,

      link: "https://drive.google.com/file/d/16ZweTheVa31rC1JoI4uYJUkSiKojn7uY/view?usp=sharing",
    },
    {
      id: 3,
      title: "PCAP: Programming Essentials in Python",
      img: IMG10,

      link: "https://drive.google.com/file/d/1gPuRErD3HHtUIkvz24fSB22lED48PqXr/view?usp=sharing",
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
