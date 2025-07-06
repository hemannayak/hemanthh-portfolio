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
import IMG7 from "../../assets/Infotact.jpg";
import IMG8 from "../../assets/codealpha.jpeg";
import IMG9 from "../../assets/Apexplanet.jpeg";

import "./work.css";

const Work = () => {
  return (
    <div>
      <div id="work">
        <h3>Experience</h3>
      </div>
      <VerticalTimeline>
        {/* Infotact Solutions – Data Analytics Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG7} alt="Infotact" />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate L1 – Data Analytics Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Infotact Solutions
          </h4>
          <ul>
            <li>
              Conducting data preprocessing, visualization, and deriving
              insights using Python, Excel, and SQL. Collaborating on live
              projects while learning dashboard building, business metrics
              analysis, and advanced charting techniques.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* CodeAlpha – Data Analytics Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG8} alt="CodeAlpha" />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Analytics Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CodeAlpha (Remote)
          </h4>
          <ul>
            <li>
              Working on real-world datasets to perform EDA, build dashboards,
              and deliver data-driven insights. Projects include IPL analytics,
              web scraping, and sentiment analysis using libraries like Pandas,
              Matplotlib, Seaborn, and BeautifulSoup.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* ApexPlanet – Web Dev Intern */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG9} alt="ApexPlanet" />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ApexPlanet Software Pvt Ltd (Remote)
          </h4>
          <ul>
            <li>
              Creating responsive and clean UIs using HTML, CSS, and JavaScript.
              Enhancing frontend logic, debugging live projects, and
              understanding agile workflows while contributing to
              production-level code under mentorship.
            </li>
          </ul>
        </VerticalTimelineElement>

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
              Gemini.
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
              JavaScript. Supporting backend integration and deployment while
              working with a remote team. Strengthened frontend skills and
              real-time dev workflow using Git and collab tools.
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
              Spearheading peer-led initiatives and enhancing academic +
              leadership ecosystems.
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
              Supported class-level coordination, faculty assistance, and
              college event management. Laid the foundation for leadership as
              HOD through real-time team handling and peer collaboration.
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
              Designed responsive frontend layouts using HTML, CSS, and
              Bootstrap. Built UI components, practiced clean code, and ensured
              cross-browser compatibility under developer mentorship.
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
              Built regional LLMs and chatbots in Telugu using NLP and React.
              Promoted language preservation through AI while learning dataset
              curation, model training, and conversational interface deployment.
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
              Worked on engineering projects for social good. Contributed to
              planning and implementation of sustainable tech solutions for
              underserved communities, merging purpose with problem-solving.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Work;
