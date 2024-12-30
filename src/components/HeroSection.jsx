import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          We create <br /> beautiful designs and <span>creative UI</span>
        </h1>
        <p className="hero-subtitle">Transform your ideas into reality</p>
        <div className="hero-buttons">
          <a href="mailto:santoshsub.33@gmail.com" className="btn-primary">
            Hire Me
          </a>
          <button
            className="btn-secondary"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1v6hYYh5opgvjByU7WHhLRbdu3WhgHLd4bnT10cxh5Ss/edit#heading=h.319qcn16p80x",
                "_blank"
              )
            }
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
