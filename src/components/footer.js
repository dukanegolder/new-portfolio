import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";
import "../assets/style/footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/dukanegolder">
        <GoMarkGithub size={50} />
      </a>
      <a
        className="linked-logo"
        href="https://www.linkedin.com/in/dukane-golder/"
      >
        <SiLinkedin size={50} />
      </a>
    </div>
  );
}
