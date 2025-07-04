import React from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";
import IMG1 from "../../assets/Ishita.png";
import IMG2 from "../../assets/karthik.png";
import IMG3 from "../../assets/Gnanitha.png";
import IMG4 from "../../assets/Varsha.png";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/bhanu-prasad-paitar-583188249/",
      img: IMG1,
      name: "Ishita Roy",
      role: "SSG - Student Director 2024",
      test: "Hemanth has been an exceptional member of HITAM's Student Self Governance (SSG), demonstrating an inspiring journey of growth and transformation. Initially composed and reserved, he gradually stepped into his potential—consistently contributing thoughtful ideas and taking initiative within his department. His evolution into a confident leader, paired with his collaborative mindset and strong interpersonal skills, has made a lasting impact on our team. Hemanth’s dedication, adaptability, and drive to improve set him apart. I am confident in his continued success and excited to see the heights he will reach in the future.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/nishanth-artham-1a572b212/",
      img: IMG2,
      name: "Karthik Manda",
      role: "SSG - Student Dean CDC 2024",
      test: "Hemanth, I’ve really admired the effort and dedication you’ve shown as part of SSG. Watching you grow from a coordinator to Student HOD has been amazing, and I honestly believe you’re well on your way to making it to the core team too. It reminds me a lot of my own SSG journey 😅.Also, I’ve been noticing how actively you’re building your network on LinkedIn—it’s great to see! Keep up the good work and stay consistent. Wishing you all the best ahead!",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/sai-santosh-bonagiri-335168225/",
      img: IMG3,
      name: "Gnanitha Suryadevara",
      role: "SSG - Student Dean R&D",
      test: "Hemanth, you’ve always been super talented—with amazing communication, organizing, and tech skills. It’s honestly so cool how you manage to balance everything so well without losing that creative spark.I loved going through your portfolio—it truly shows your hard work and passion. Can’t wait to see more creative stuff from you in the future! Wishing you all the best always! Anytime, Hemanth 🫶🏻",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/shivashanker-reddy-cheruku-713823278/",
      img: IMG4,
      name: "Sree Varsha",
      role: "SSG - Student Principal 2025",
      test: "Hemanth, I’ve always genuinely admired the level of commitment and dedication you bring to everything you take on. Whether it's a small responsibility or a big challenge, you approach it with the same sincerity, focus, and drive—and that’s something really rare.Your consistency, attention to detail, and the way you take ownership of your work truly stand out. It’s not just about completing tasks—it’s about the energy, thought, and care you put into them that makes a difference. You’re someone who sets a quiet but powerful example for others to follow, just by doing what you do, the way you do it. Keep going strong—you’re doing amazing, and I’m sure there’s so much more ahead for you!",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers & Mentors</h5>
      <div id="work">
        <h3>Testimonials</h3>
      </div>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a
                href={test.link ? test.link : ""}
                target="_blank"
                rel="noreferrer"
              >
                <img src={test.img} alt="" />
              </a>
            </div>
            <h3 className="client__name">{test.name}</h3>
            {test.role && <h4>{test.role}</h4>}

            <em className="client__review">{'"' + test.test + '"'}</em>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
