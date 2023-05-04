import React from "react";
import "../assets/style/header.css";
import img from "../assets/img/IMG_2746.jpeg";

export default function Header() {
  return [
    <div className="backgroundtext">
      <h2>
        <p className="name">Dukane Golder</p>
        <div>
          <p className="about">Full-Stack Developer</p>
          <img
            className="img-header"
            src={img}
            alt=""
            height={180}
            width={180}
          />
        </div>
      </h2>
    </div>,
  ];
}
