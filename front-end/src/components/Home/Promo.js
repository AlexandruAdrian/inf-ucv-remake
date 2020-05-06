import React from 'react';
import "../../styles/home/Promo.css";
import "../../styles/animations.css";
/* Custom Hooks */
import useIntersect from "../../hooks/useIntersect";

const Promo = () => {
  const [setNode, entry, observer] = useIntersect({ threshold: 0.2 });

  let animation = '';

  if (entry.isIntersecting) {
    animation = 'slide-up';
    observer.unobserve(entry.target);
  }

  return (
    <section className='promo white-bg-container' ref={setNode}>
      <div className={animation}>
        <h3>Vrei o cariera de viitor?</h3>
        <h4>Studiaza informatica la Universitatea din Craiova</h4>
      </div>
    </section>
  );
}
export default Promo