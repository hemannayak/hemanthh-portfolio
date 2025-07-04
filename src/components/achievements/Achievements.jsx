import React from "react";
import IMG1 from "../../assets/Gray.png";
import IMG2 from "../../assets/nstse.jpg";
import IMG3 from "../../assets/nie.jpg";
import IMG5 from "../../assets/Linkedinp.webp";
import IMG6 from "../../assets/SSG2025.png";
import IMG7 from "../../assets/SIH2024.jpeg";
import IMG9 from "../../assets/SSG 2026.jpeg";
import "./achievements.css";

const Achievements = () => {
  const achievements = [
    {
      id: 9,
      title: "Student HOD – CSE (Data Science), HITAM (2025–2026)",
      subtitle:
        "Currently leading the department under SSG, driving initiatives, events, and peer-faculty engagement.",
      img: IMG9,
      link: "",
      linkName: "",
    },
    {
      id: 8,
      title: "Smart India Hackathon 2024",
      subtitle:
        "Top 25 Finalist in the internal round at HITAM. Developed real-world tech solutions in a team setting.",
      img: IMG7,
      link: "",
      linkName: "",
    },
    {
      id: 7,
      title: "LinkedIn Personal Branding",
      subtitle:
        "Grew to 4.5K+ followers with 100K+ post impressions through content, networking, and community building.",
      img: IMG5,
      link: "https://www.linkedin.com/in/hemanth-nayak7",
      linkName: "LinkedIn Profile",
    },
    {
      id: 6,
      title: "SSG Student Coordinator – CSE (DS), HITAM (2024–2025)",
      subtitle:
        "Organized department-level events, facilitated student voices, and collaborated with faculty under SSG.",
      img: IMG6,
      link: "",
      linkName: "",
    },
    {
      id: 1,
      title: "Gray Matters ACT – 2018",
      subtitle:
        "Participated in the All India Critical Thinking Test conducted by Gray Matters India.",
      img: IMG1,
      link: "",
      linkName: "",
    },
    {
      id: 5,
      title: "National Science Talent Search – 2017",
      subtitle:
        "Took part in the national-level competition organized by The Unified Council.",
      img: IMG2,
      link: "https://www.hackerrank.com/karthikeyaburla?hr_r=1",
      linkName: "Profile",
    },
    {
      id: 2,
      title: "Times NIE Think & Learn Challenge – 2016",
      img: IMG3,
      subtitle:
        "Qualified for the City Finals of the Think & Learn Challenge conducted by Times of India.",
      link: "",
    },
    ];

  const openLink = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <section id="Achievements">
      <div id="work">
        <h3>Achievements</h3>
      </div>

      <div className="container course__container">
        {achievements.map((pro) => (
          <article className="course__item" key={pro.id}>
            <div className="course__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="course__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.subtitle}</p>
            </div>
            {pro.link && (
              <div
                className="course__item-cta"
                onClick={() => openLink(pro.link)}
              >
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  {pro.linkName}
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
