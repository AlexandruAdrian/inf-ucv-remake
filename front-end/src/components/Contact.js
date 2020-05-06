import React from 'react';
import "../styles/contact/Contact.css"
/* Components */
import Header from "./Header";

const Contact = () => {

  return (
    <>
      <Header
        bg='contact-bg'
        hero
        title="Informatii de Contact"
        subtitle=""
      />
      <section className="container white-bg-container contact">
        <h4>Departamentul de Informatica</h4>
        <p>Universitatea din Craiova, Facultatea de Stiinte</p>
        <adress>
          <p><strong>Adresa: </strong>Strada A.I. Cuza nr. 13, cod. 200585, Craiova, Dolj, Romania</p>

          <p><strong>Tel: </strong>0251 413 728</p>
          <p><strong>Fax: </strong>0251 412 673</p>
          <p><strong>E-mail: </strong>office@inf.ucv.ro</p>
        </adress>

        <h5>Harta</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.5766515341684!2d23.798532315389675!3d44.3186529791042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d7a006e30d1b%3A0x84a5887ac48a77c7!2sCraiova%20University!5e0!3m2!1sen!2sro!4v1588765351404!5m2!1sen!2sro"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0">
        </iframe>
      </section>
    </>
  )
}

export default Contact;