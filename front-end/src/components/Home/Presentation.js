import React from 'react';
import "../../styles/home/Presentation.css";
import "../../styles/animations.css";
/* Components */
import Domains from "./Domains";
import StudyPlans from "./Study-Plans";
/* Custom Hooks */
import useIntersect from "../../hooks/useIntersect";

const Presentation = () => {
  const [setNode, entry, observer] = useIntersect({threshold: 0.4});
  let animationLeft = '';
  let animationRight = '';

  if (entry.isIntersecting) {
    animationLeft = 'slide-in-from-left';
    animationRight = 'slide-in-from-right';
    observer.unobserve(entry.target);
  }

  return (
    <section className="presentation" ref={setNode}>
      <Domains className={animationLeft} />
      <StudyPlans className={animationRight} />
    </section>
  );
}

export default Presentation;