import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import IMG1 from "../../assets/VOC.jpg";
import IMG2 from "../../assets/SSG 2026.jpeg";
import IMG3 from "../../assets/Eis.jpeg";
import IMG4 from "../../assets/AICreators.jpeg";
import IMG5 from "../../assets/IUCEE.jpeg";
import IMG6 from "../../assets/SSG2025.png";
import "./work.css";

const Work = () => {
  return (
    <div>
      <div id="work">
        <h3>Experience</h3>
      </div>
      <VerticalTimeline>
        {/* AI & Prompt Engineering Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jun 2025 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG1} alt="VOC" />}
        >
          <h3 className="vertical-timeline-element-title">
            AI & Prompt Engineering Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            VaultofCodes (Remote)
          </h4>
          <ul>
            <li>
              Exploring the intersection of generative AI and automation by
              crafting optimized prompts, experimenting with prompt chaining,
              and understanding LLM token economy across tools like ChatGPT and
              Gemini. This internship is helping me bridge creativity and
              machine logic.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Web Dev Intern at VaultofCodes */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jun 2025 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG1} alt="VOC" />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            VaultofCodes via AICTE
          </h4>
          <ul>
            <li>
              Developing responsive UIs using HTML5, CSS3, Bootstrap, and
              JavaScript. Supporting backend integration and real-world
              deployment practices while working with a remote team.
              Strengthened my frontend skills and real-time development workflow
              using Git and collaboration tools.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Student HOD */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="May 2025 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG2} alt="SSG 2026" />}
        >
          <h3 className="vertical-timeline-element-title">
            Student HOD – CSE (Data Science)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SSG, HITAM (2025 - 2026)
          </h4>
          <ul>
            <li>
              Leading student governance, coordinating department-wide events,
              and building communication bridges between students and faculty.
              Spearheading initiatives to uplift student voices and enhance
              peer-led collaboration systems for academic and leadership growth.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Student Coordinator */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Aug 2024 - May 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG6} alt="SSG 2025" />}
        >
          <h3 className="vertical-timeline-element-title">
            Student Coordinator
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            SSG, HITAM (2024 - 2025)
          </h4>
          <ul>
            <li>
              Played a key support role in class management, faculty assistance,
              and event execution. Acted as a student liaison, refining my
              people skills and laying the foundation for my HOD
              responsibilities through real-time problem solving and teamwork.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* EISystems Internship */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Apr 2025 - May 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG3} alt="EISystems" />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            EISystems Technologies
          </h4>
          <ul>
            <li>
              Worked on designing front-end layouts using HTML, CSS, and
              Bootstrap. Gained practical exposure to UI structuring,
              cross-browser compatibility, and testing real-time components
              under developer supervision, strengthening my foundation in
              frontend web development.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* AI Creators Internship */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Aug 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG4} alt="AI Creators" />}
        >
          <h3 className="vertical-timeline-element-title">
            AI Creators Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Swecha Telangana
          </h4>
          <ul>
            <li>
              Collaborated on building regional LLMs and chatbots in Telugu to
              preserve local language. Learned NLP techniques, trained models,
              curated datasets, and deployed conversational UIs with React. This
              internship blended AI, open-source, and grassroots innovation.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* IUCEE-EWB Core Team Member */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jan 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG5} alt="IUCEE" />}
        >
          <h3 className="vertical-timeline-element-title">Core Team Member</h3>
          <h4 className="vertical-timeline-element-subtitle">
            IUCEE-EWB Student Chapter, HITAM
          </h4>
          <ul>
            <li>
              Collaborated on engineering projects with a social mission,
              focused on sustainable innovation. Actively contributed to
              planning and execution phases, gaining insight into how technology
              can serve underrepresented communities through scalable,
              meaningful solutions.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Work;
