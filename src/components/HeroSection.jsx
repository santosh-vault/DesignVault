import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          We design <br /> beautiful designs and <span>effective logos</span>
        </h1>
        <p className="hero-subtitle">Transform your ideas into reality</p>
        <div className="hero-buttons">
          <a href="mailto:santoshsub.33@gmail.com" className="btn-primary">
            Hire Me
          </a>
          <button className="btn-secondary">View Work</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
