import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1 className="text-5xl">Pangoth Hemanth Nayak</h1>
        <span>I'm a </span>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(
                `<span className="profession">Student HOD – CSE (Data Science)</span>`
              )
              .pauseFor(1200)
              .deleteAll()
              .typeString(
                `<span className="profession">Data Analyst Intern</span>`
              )
              .pauseFor(1200)
              .deleteAll()
              .typeString(
                `<span className="profession">Frontend Developer</span>`
              )
              .pauseFor(1200)
              .deleteAll()
              .typeString(
                `<span className="profession">AI & Prompt Engineer</span>`
              )
              .pauseFor(1200)
              .deleteAll()
              .typeString(
                `<span className="profession">Content Creator @hem_writess</span>`
              )
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
