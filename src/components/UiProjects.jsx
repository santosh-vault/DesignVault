import React from "react";
import "./UIProjects.css";

const UIProjects = () => {
  const projects = [
    {
      link: "https://www.figma.com/design/Ag57qia7VnNtsZulODF5vD/Fintech?node-id=0-1&p=f&t=We7eYyTqoMAcBXLr-0",
      img: "src/assets/1.png",
      text: "Landing Page Design for a Tech Startup.",
    },
    {
      link: "https://www.figma.com/design/7vkWVTsoooePxShfkhyHJn/award?t=We7eYyTqoMAcBXLr-0",
      img: "src/assets/2.png",
      text: "Dashboard UI for a Finance Application.",
    },
    {
      link: "https://www.figma.com/design/7vkWVTsoooePxShfkhyHJn/award?t=We7eYyTqoMAcBXLr-0",
      img: "src/assets/3.png",
      text: "Mobile App UI for a Food Delivery Service.",
    },
    {
      link: "https://www.figma.com/design/ZB9aNewpdABV68OAr7GvPG/celebrity-website?node-id=0-1&p=f&t=z3qFn2PyDTZzdO0W-0",
      img: "src/assets/4.png",
      text: "E-commerce Website Design with Modern Aesthetics.",
    },
    {
      link: "https://www.figma.com/design/HW1NBJcRD1CszlsxNJogmm/Automobiles?node-id=0-1&p=f&t=z3qFn2PyDTZzdO0W-0",
      img: "src/assets/5.png",
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
