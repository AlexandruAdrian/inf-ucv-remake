import React, {useState, useLayoutEffect, useRef} from 'react';
import './styles/App.css';
/* Components */
import Nav from "./components/Nav";
import Hero from "./components/Home/Hero";
import Promo from  "./components/Home/Promo";
import Presentation from "./components/Home/Presentation";

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
        <Presentation />
      </main>
    </div>
  );
}

export default App;
