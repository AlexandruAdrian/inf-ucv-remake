import React from 'react';
import "../styles/NoMatch.css";

const NoMatch = () => {
  return (
    <section className="container white-bg-container not-found">
      <h1>404</h1>
      <h2>Se pare ca nu am gasit ceea ce cautai.</h2>
      <button><a href="/">Home</a></button>
    </section>
  );
}

export default NoMatch;