import React from 'react';
import "../styles/Hero.css";

const Hero = ({animateHero, title, subtitle, dark}) => {
    if (animateHero) {
        return (
            <section className="hero">
                <h1 className="transparent animate-hero-h1">{title}</h1>
                <h2 className="transparent animate-hero-h2">{subtitle}</h2>
            </section>
        );
    } else {
        return (
            <section className="hero">
                <div className="increase-visibility">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </section>
        );
    }
}

export default Hero;