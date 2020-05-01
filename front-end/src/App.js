import React, {useState, useLayoutEffect, useRef} from 'react';
import './styles/App.css';
/* Components */
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Promo from  "./components/Promo";
import Presentation from "./components/Presentation";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const targetRef = useRef(null);
  
  useLayoutEffect(() => {
    setHeaderHeight(targetRef.current.offsetHeight);
  }, []);
  
  return (
    <div>
      <header ref={targetRef}>
        <Nav headerHeight={headerHeight}/>
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
