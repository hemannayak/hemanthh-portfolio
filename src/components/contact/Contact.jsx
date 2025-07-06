import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(false);

    emailjs
      .sendForm(
        "service_ac9dhm5", // ✅ Your EmailJS Service ID
        "template_zuzrjwi", // ✅ Your EmailJS Template ID
        formRef.current,
        "HT40mg5aB_Afk-ieJ" // ✅ Your updated Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setMessage(true);
        },
        (error) => {
          console.error("Send error:", error.text);
          setMessage(false);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond ASAP if a valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>official.hemanthnayakpangoth@gmail.com</h5>
            <a
              href="mailto:official.hemanthnayakpangoth@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && (
            <span className="confirmation-text">
              Thanks, I'll reply ASAP 🙂
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
