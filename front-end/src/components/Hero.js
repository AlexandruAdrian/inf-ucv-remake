import React from 'react';
import "../styles/Hero.css";

const Hero = ({title = "", subtitle = ""}) => {
    return  (
        <section className="main-hero">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </section>
    );
}

export default Hero;