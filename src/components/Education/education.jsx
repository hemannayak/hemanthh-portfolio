import React from "react";
import { BorderBeam } from "../../componentsUi/magicui/border-beam";
import IMG1 from "../../assets/hitam.png";
import IMG2 from "../../assets/Mjp.png";
import IMG3 from "../../assets/ZPHS.png";

import "./education.css";

const education = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Hyderabad Institute of Technology And Management (2023-2027)",
      subtitle: "Computer Science and Engineering - Data Science (CSD)",
      img: IMG1,
      description:
        "⚡ I have taken variety of courses related to  Full stack development ,Data Structures and Algorithms , Object Oriented Programming etc. Apart from this, I have done courses on cryptography , Network Security and Ethical Hacking.",
      grade: "CGPA : 8.45",
      link: "https://hitam.org/",
    },
    {
      id: 2,
      title: "MJPTBCWREIS (BOYS) , Goshamahal (2021 - 2023 )",
      subtitle:
        "class : XII  Major: Science (Physics, Chemistry, Mathematics) ",
      img: IMG2,
      description:
        "⚡ I have studied to secure admission in a prestigious engineering institution by utilizing my strong foundation in Physics, Chemistry, and Mathematics and the training received for the Joint Entrance Examination (JEE).",
      grade: "Grade : 91%",
      link: "https://mjptbcwreis.telangana.gov.in/",
    },
    {
      id: 3,
      title: "Zilla Parishad High School, Pragathi Nagar, Hyderabad (2021)",
      subtitle: "Class : X",
      img: IMG3,
      description:
        "⚡TSWRS (shaikpet Hyderabad) is a reputable educational institution dedicated to providing a high-quality learning environment for students. With a focus on academic excellence, character development, and holistic growth, our school strives to nurture students into well-rounded individuals equipped with the skills and knowledge necessary for success in the modern world.",
      grade: "CGPA : 9.7",
      link: "https://schooledu.telangana.gov.in/SCHOOLEDUCATION/",
    },
  ];

  return (
    <section id="education">
      <h2 className="text-3xl">My Education</h2>
      <div className="container education__container">
        {soloProjects.map((pro) => (
          <article className="education__item  " key={pro.id}>
            <div className="education__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="education__item-content">
              <h3>{pro.title}</h3>
              <h3>{pro.subtitle}</h3>
              <p>{pro.grade}</p>
              {/* <p>{pro.description}</p> */}
            </div>
            <div className="education__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default education;
