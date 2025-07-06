import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./work.css";

// Image Imports
import IMG1 from "../../assets/VOC.jpg";
import IMG2 from "../../assets/SSG 2026.jpeg";
import IMG3 from "../../assets/Eis.jpeg";
import IMG4 from "../../assets/AICreators.jpeg";
import IMG5 from "../../assets/IUCEE.jpeg";
import IMG6 from "../../assets/SSG2025.png";
import IMG7 from "../../assets/Infotact.jpg";
import IMG8 from "../../assets/codealpha.jpeg";
import IMG9 from "../../assets/Apexplanet.jpeg";
import IMG10 from "../../assets/Exe.jpeg";

const Work = () => {
  return (
    <div>
      <div id="work">
        <h3>Experience</h3>
      </div>
      <VerticalTimeline>
        {/* Excelerate */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Aug 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG10} alt="Excelerate" />}
        >
          <h3>Data Analyst Trainee Intern</h3>
          <h4>Excelerate (Remote)</h4>
          <ul>
            <li>
              Collected, cleaned, and transformed raw data into well-structured
              datasets using Python and Excel.
            </li>
            <li>
              Built interactive dashboards using Power BI and Excel to help
              internal teams monitor KPIs effectively.
            </li>
            <li>
              Performed statistical analysis and created visual reports that
              influenced key business decisions.
            </li>
            <li>
              Delivered insights in weekly review meetings, learning stakeholder
              communication and data storytelling.
            </li>
          </ul>

          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/12yabijnPMxYvnLI8jTtjMnvIM62UAbBM/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Offer Letter
          </a>
        </VerticalTimelineElement>

        {/* Infotact */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG7} alt="Infotact" />}
        >
          <h3>Associate L1 – Data Analytics Intern</h3>
          <h4>Infotact Solutions</h4>
          <ul>
            <li>
              Preprocessed real-world datasets using Python libraries like
              Pandas and NumPy for actionable insight generation.
            </li>
            <li>
              Collaborated on internal tools to automate data workflows and
              streamline business reporting processes.
            </li>
            <li>
              Built custom dashboards using Tableau and Excel to visualize team
              productivity and marketing metrics.
            </li>
            <li>
              Explored query optimization and data extraction using advanced SQL
              techniques on company databases.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1YM2n9vL5G33MSx5DF0SBXMe0Fei0Tybe/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Offer Letter
          </a>
        </VerticalTimelineElement>

        {/* CodeAlpha */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG8} alt="CodeAlpha" />}
        >
          <h3>Data Analytics Intern</h3>
          <h4>CodeAlpha (Remote)</h4>
          <ul>
            <li>
              Conducted Exploratory Data Analysis (EDA) on IPL 2023 and
              real-world datasets to extract meaningful trends.
            </li>
            <li>
              Created compelling visualizations using Seaborn and Matplotlib for
              decision-making presentations.
            </li>
            <li>
              Implemented web scraping with BeautifulSoup to gather sentiment
              data and perform NLP-based analysis.
            </li>
            <li>
              Documented and shared insights via project reports, gaining
              experience in project delivery and timeline tracking.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1-2jGsdQ2TIFu6avJpcSj2IidTUkZ-zw-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Offer Letter
          </a>
        </VerticalTimelineElement>

        {/* ApexPlanet */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jul 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG9} alt="ApexPlanet" />}
        >
          <h3>Web Development Intern</h3>
          <h4>ApexPlanet Software Pvt Ltd (Remote)</h4>
          <ul>
            <li>
              Designed and coded responsive front-end pages using HTML5, CSS3,
              and JavaScript as per client requirements.
            </li>
            <li>
              Debugged live project components, collaborated on Git, and
              contributed to user experience improvements.
            </li>
            <li>
              Practiced agile methodologies while working closely with mentors
              and dev teams in weekly sprints.
            </li>
            <li>
              Built reusable UI components and practiced best practices in
              responsive design and mobile optimization.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1897_1BAq8lJbHDbuRiAogQMM0slVNAh4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Offer Letter
          </a>
        </VerticalTimelineElement>

        {/* VaultofCodes – AI */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jun 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG1} alt="VOC" />}
        >
          <h3>AI & Prompt Engineering Intern</h3>
          <h4>VaultofCodes (Remote)</h4>
          <ul>
            <li>
              Explored advanced prompt engineering techniques including prompt
              chaining, zero-shot & few-shot prompting.
            </li>
            <li>
              Worked on optimizing token usage for LLMs and designed use-cases
              using OpenAI, Gemini, and Cohere APIs.
            </li>
            <li>
              Contributed to internal prompt libraries and experimented with
              prompt tuning for different AI personas.
            </li>
            <li>
              Researched latest trends in GenAI and explored the use of
              multi-modal models for AI workflows.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1B4h_XM1Fd64mCb6D1rW-zvgVSaaqKOt3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Offer Letter
          </a>
        </VerticalTimelineElement>

        {/* VaultofCodes – Web Dev */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jun 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG1} alt="VOC" />}
        >
          <h3>Web Development Intern</h3>
          <h4>VaultofCodes via AICTE</h4>
          <ul>
            <li>
              Built and styled static and interactive webpages using HTML5,
              Bootstrap, and JavaScript for portfolio projects.
            </li>
            <li>
              Integrated forms, buttons, and dynamic components into pages while
              learning real-world deployment steps.
            </li>
            <li>
              Contributed to Git-based version control, practicing proper
              commits and collaboration with senior devs.
            </li>
            <li>
              Gained hands-on exposure to deployment practices and web app
              optimization strategies.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1INCixHQEHePTEwlOqdO_pHwr3ScAh8i9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View Offer Letter
          </a>
        </VerticalTimelineElement>
        {/* Student HOD */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="May 2025 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG2} alt="SSG 2026" />}
        >
          <h3>Student HOD – CSE (Data Science)</h3>
          <h4>SSG, HITAM (2025 – 2026)</h4>
          <ul>
            <li>
              Led department-wide initiatives, managed student-faculty
              interactions, and coordinated academic sessions.
            </li>
            <li>
              Orchestrated events, peer learning circles, and technical
              workshops to boost student participation.
            </li>
            <li>
              Mentored junior coordinators and built systems for smoother
              communication across stakeholders.
            </li>
            <li>
              Collaborated with faculty on curriculum inputs and student welfare
              strategies to improve engagement.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://www.instagram.com/p/DJTPYe-zOVO/?utm_source=ig_web_copy_link"
            target="_blank"
            rel="noreferrer"
          >
            SSG HITAM
          </a>
        </VerticalTimelineElement>

        {/* Student Coordinator */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Aug 2024 – May 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG6} alt="SSG 2025" />}
        >
          <h3>Student Coordinator</h3>
          <h4>SSG, HITAM (2024 – 2025)</h4>
          <ul>
            <li>
              Managed class logistics, supported internal event operations, and
              served as bridge between students and staff.
            </li>
            <li>
              Played a key role in organizing intra-department sessions and
              coordinating guest lectures.
            </li>
            <li>
              Earned recognition from faculty for consistency and leadership —
              leading to HOD nomination.
            </li>
            <li>
              Improved communication, teamwork, and people management skills by
              leading class-level projects.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://www.instagram.com/p/C_uYtRSzULg/?utm_source=ig_web_copy_link"
            target="_blank"
            rel="noreferrer"
          >
            SSG HITAM
          </a>
        </VerticalTimelineElement>

        {/* EISystems Internship */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Apr 2025 – May 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG3} alt="EISystems" />}
        >
          <h3>Web Development Intern</h3>
          <h4>EISystems Technologies</h4>
          <ul>
            <li>
              Designed mobile-first, responsive webpages using HTML, CSS, and
              Bootstrap components.
            </li>
            <li>
              Practiced cross-browser testing and made UI/UX optimizations for
              accessibility and consistency.
            </li>
            <li>
              Integrated forms, buttons, and reusable design blocks for various
              assigned tasks.
            </li>
            <li>
              Learned to follow design documentation and collaborate in remote
              teams using GitHub.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/your-offer-letter-link"
            target="_blank"
            rel="noreferrer"
          >
            Completion Certificate
          </a>
        </VerticalTimelineElement>

        {/* AI Creators Internship */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Aug 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG4} alt="AI Creators" />}
        >
          <h3>AI Creators Internship</h3>
          <h4>Swecha Telangana</h4>
          <ul>
            <li>
              Worked on building Telugu-based chatbots using ReactJS, local
              datasets, and NLP preprocessing steps.
            </li>
            <li>
              Helped design conversation flows, UI interfaces, and tested LLM
              responses for accuracy and language depth.
            </li>
            <li>
              Contributed to dataset creation and fine-tuning scripts for
              regional model enhancement.
            </li>
            <li>
              Promoted language inclusivity in AI by building tools with
              cultural and linguistic relevance.
            </li>
          </ul>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/17zkIKuGrb6GoPOMS83DN4Lo2xakPX_4s/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Completion Certificate
          </a>
        </VerticalTimelineElement>

        {/* IUCEE-EWB Core Team Member */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="Jan 2024 – Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<img className="experienceImg" src={IMG5} alt="IUCEE" />}
        >
          <h3>Core Team Member</h3>
          <h4>IUCEE-EWB Student Chapter, HITAM</h4>
          <ul>
            <li>
              Collaborated on engineering solutions for sustainability,
              including water harvesting and clean energy projects.
            </li>
            <li>
              Worked on proposal drafting, community surveys, and creating
              actionable plans with team mentors.
            </li>
            <li>
              Organized awareness drives and technical sessions to build student
              participation in social innovation.
            </li>
            <li>
              Balanced project timelines, budgeting, and execution plans while
              improving leadership and empathy.
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Work;