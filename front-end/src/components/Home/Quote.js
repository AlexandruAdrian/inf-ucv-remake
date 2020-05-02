import React from 'react';
import "../../styles/Quote.css";
import "../../styles/animations.css";
/* Custom Hooks */
import useIntersect from "../../hooks/useIntersect";
/* Components */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Quote = () => {
  const [setNode, entry, observer] = useIntersect({threshold: 0.2});
  let animation = '';

  if (entry.isIntersecting) {
    animation = 'slide-up';
    observer.unobserve(entry.target);
  }

  return (
    <section className='quote'>
      <div className={animation} ref={setNode}>
        <FontAwesomeIcon icon="quote-left" className="transform-quote" size="lg" />
        <p>Stiinta este ceea ce intelegem suficient de bine pentru a-i explica unui computer</p>
        <FontAwesomeIcon icon="quote-right" className="transform-quote" size="lg" />
      </div>
    </section>
  );
}

export default Quote;