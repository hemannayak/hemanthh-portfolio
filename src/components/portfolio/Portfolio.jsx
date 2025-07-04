import React from "react";
import IMG1 from "../../assets/Levelup.jpeg";
import IMG2 from "../../assets/Heritage.jpeg";
import IMG3 from "../../assets/Portfolio.jpeg";
import IMG4 from "../../assets/HMS.jpeg";
import IMG5 from "../../assets/Ecommerce.jpg";

import { NeonGradientCard } from "../../componentsUi/magicui/neon-gradient-card";
import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "LevelUp Learning – Enhancing Engagement with Gamification",
      img: IMG1,
      description:
        "LevelUp Learning is a gamified e-learning platform built using React, Spring Boot, and Supabase, designed to boost student engagement through XP-based progression, badges, and leaderboards. It offers interactive course modules, real-time dashboards, and secure JWT authentication for a dynamic learning experience.",
      technologies:
        "React | TypeScript | Tailwind CSS | Java (Spring Boot) | Supabase (PostgreSQL)",
      link: "https://preview--levelup-universe.lovable.app/",
      github: "https://github.com/hemannayak/level-up-academy-hub",
    },
    {
      id: 2,
      title: "Website on Indian Heritage and Culture",
      img: IMG2,
      description:
        "This interactive website was built during Smart India Hackathon 2024 to highlight India’s rich culture, history, and art. It features dynamic pages on festivals, architecture, and music, with smooth UI/UX to offer users an engaging, educational exploration of Indian heritage.",
      technologies: "React | HTML5 | CSS | JavaScript",
      link: "",
      github: "https://github.com/hemannayak/",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      img: IMG3,
      description:
        "A responsive personal website built with HTML, CSS, and JavaScript to showcase my developer journey, skills, and achievements. Designed for smooth navigation and minimal aesthetics, this site reflects my personality and professional presence across web development and data science projects.",
      technologies: "HTML5 | CSS | JavaScript",
      link: "#home",
      github: "https://github.com/BoorlaKarthikeya/react-portfolio",
    },
    {
      id: 4,
      title: "Hospital Management System",
      img: IMG4,
      description:
        "This project streamlines appointment management between doctors and patients using Java and DBMS. Featuring separate modules for doctors and patients, it simplifies hospital workflows, reduces manual tasks, and improves communication through a clean and intuitive interface.",
      technologies: "Java | JavaScript | MySQL | DBMS",
      link: "", // add if deployed
      github: "", // optional
    },
    {
      id: 5,
      title: "E-Commerce Website using Django",
      img: IMG5,
      description:
        "Built a fully functional e-commerce platform using Django, offering features like user authentication, product filtering, shopping cart, order processing, and an admin dashboard. This project sharpened my backend development skills and simulated a real-world online shopping experience.",
      technologies:
        "Django | Python | HTML | CSS | JavaScript | MySQL/PostgreSQL",
      link: "", // add if deployed
      github: "", // optional
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <div id="work">
        <h3>Projects</h3>
      </div>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item " key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3 className="text-2xl">{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {pro.link && (
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
