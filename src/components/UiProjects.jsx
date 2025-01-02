import React from "react";
import "./UIProjects.css";
import {
  uidesign1,
  uidesign2,
  uidesign3,
  uidesign4,
  uidesign5,
} from "../scripts/Images";

const UIProjects = () => {
  const projects = [
    {
      link: "https://www.figma.com/design/Ag57qia7VnNtsZulODF5vD/Fintech?node-id=0-1&p=f&t=We7eYyTqoMAcBXLr-0",
      img: uidesign1,
      text: "Landing Page Design for a Tech Startup.",
    },
    {
      link: "https://www.figma.com/design/7vkWVTsoooePxShfkhyHJn/award?t=We7eYyTqoMAcBXLr-0",
      img: uidesign2,
      text: "Dashboard UI for a Finance Application.",
    },
    {
      link: "https://www.figma.com/design/7vkWVTsoooePxShfkhyHJn/award?t=We7eYyTqoMAcBXLr-0",
      img: uidesign3,
      text: "Mobile App UI for a Food Delivery Service.",
    },
    {
      link: "https://www.figma.com/design/ZB9aNewpdABV68OAr7GvPG/celebrity-website?node-id=0-1&p=f&t=z3qFn2PyDTZzdO0W-0",
      img: uidesign4,
      text: "E-commerce Website Design with Modern Aesthetics.",
    },
    {
      link: "https://www.figma.com/design/HW1NBJcRD1CszlsxNJogmm/Automobiles?node-id=0-1&p=f&t=z3qFn2PyDTZzdO0W-0",
      img: uidesign5,
      text: "Portfolio Website for a Creative Agency.",
    },
  ];

  return (
    <div className="ui-projects-container">
      <h2 className="ui-projects-heading">UI Projects</h2>
      <div className="ui-projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-project-item"
          >
            <img src={project.img} alt={`Project ${index + 1}`} />
            <figcaption className="overlay">
              <p>{project.text}</p>
            </figcaption>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UIProjects;
