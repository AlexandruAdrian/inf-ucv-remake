import React from 'react';
import "../../styles/Offer.css";
import News from "./News";
import Admittance from "./Admittance"

const Offer = () => (
  <section className="offer">
    <News />
    <Admittance />
  </section>
);

export default Offer;