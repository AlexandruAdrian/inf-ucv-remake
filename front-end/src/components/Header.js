import React, { useState, useLayoutEffect, useRef } from 'react';
import Nav from "./Nav";
import MobileNav from "./Mobile-Nav";
import Hero from "./Hero";

const Header = ({ bg, hero, title, subtitle }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const targetRef = useRef(null);

  useLayoutEffect(() => {
    setHeaderHeight(targetRef.current.offsetHeight);
  }, []);

  return (
    <header ref={targetRef} className={bg}>
      <Nav headerHeight={headerHeight} />
      <MobileNav />
      {hero && <Hero title={title} subtitle={subtitle} />}
    </header>
  );
}

export default Header;