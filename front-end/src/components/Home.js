import React from 'react';
import Header from './Header';
import Promo from  "./Home/Promo";
import Offer from "./Home/Offer";
import Presentation from "./Home/Presentation";
import Quote from "./Home/Quote";

const Home = () => {
  return (
    <>
    <Header 
      bg='home-bg' 
      hero
      title="Departamentul de Informatica"
      subtitle="Facultatea de Stiinte"
    />
    <main>
      <Promo />
      <Offer />
      <Presentation />
      <Quote />
    </main>
    </>
  );
}

export default Home;