import React from 'react';
import "../styles/Hero.css";

const Hero = ({ title = "", subtitle = "" }) => {
    return (
        <section className="hero">
            <h1>{title}</h1>
            {subtitle.length > 0 && <h2>{subtitle}</h2>}
        </section>
    );
}

export default Hero;