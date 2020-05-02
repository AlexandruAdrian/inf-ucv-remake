import React, {useState, useLayoutEffect, useRef} from 'react';


import './styles/App.css';
/* Components */
import Nav from "./components/Nav";
import Hero from "./components/Home/Hero";
import Promo from  "./components/Home/Promo";
import Offer from "./components/Home/Offer";
import Presentation from "./components/Home/Presentation";
import Quote from "./components/Home/Quote";
/* Creates an icons library to use throughout the application */

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const targetRef = useRef(null);
  
  
  useLayoutEffect(() => {
    setHeaderHeight(targetRef.current.offsetHeight);
  }, []);
  
  return (
    <div>
      <header ref={targetRef}>
        <Nav headerHeight={headerHeight} />
        <Hero />
      </header>
      <main>
        <Promo />
        <Offer />
        <Presentation />
        <Quote />
      </main>
      <footer>
        <p>Copyright &copy; 2020 All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
