import React from 'react';
import Promo from  "./Home/Promo";
import Offer from "./Home/Offer";
import Presentation from "./Home/Presentation";
import Quote from "./Home/Quote";

const Home = () => {
  return (
    <main>
      <Promo />
      <Offer />
      <Presentation />
      <Quote />
    </main>
  );
}

export default Home;