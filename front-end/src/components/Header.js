import React, {useState, useLayoutEffect, useRef} from 'react';
import Nav from "./Nav";
import Hero from "./Hero";

const Header = ({bg, hero, animateHero=false, title, subtitle}) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const targetRef = useRef(null);
  
  useLayoutEffect(() => {
    setHeaderHeight(targetRef.current.offsetHeight);
  }, []);

  return (
    <header ref={targetRef} className={bg}>
        <Nav headerHeight={headerHeight} />
        {hero && <Hero animateHero={animateHero} title={title} subtitle={subtitle}/>}
    </header>
  );
}

export default Header;