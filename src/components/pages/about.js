import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import "./css/about.css";

function About() {
  return (
    <div>
      <h2 className="about-header">About Me</h2>
      <p className="about-p">
        As a recent graduate with a Full-Stack certificate from the University
        of Utah, I am a highly motivated and enthusiastic developer eager to
        jumpstart my career in the tech industry. I am passionate about building
        web applications and excited to work with cutting-edge technologies to
        develop innovative solutions that improve people's lives. During my time
        in school, I gained hands-on experience working on a variety of web
        development projects, where I honed my skills in JS, Node, React, and
        many more. As a new full stack developer, I understand the importance of
        continuous learning and staying up-to-date with industry trends and
        emerging technologies. I am committed to ongoing professional
        development, and I am eager to learn new skills and take on new
        challenges as I begin my career.
      </p>
      <div>
        <a href="https://drive.google.com/file/d/1rL8usIKTrBVutcY5WW-7u2ezcj2Rx0aE/view?usp=sharing">
          <IoDocumentTextSharp size={30} className="about-text" />
          Resume
        </a>
      </div>
    </div>
  );
}

export default About;
