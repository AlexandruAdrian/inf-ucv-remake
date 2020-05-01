import React from 'react';
import "../../styles/Presentation.css";
import News from "./News";
import Admitere from "./Admitere"

const Presentation = () => (
  <section className="presentation">
    <News />
    <Admitere />
  </section>
);

export default Presentation;