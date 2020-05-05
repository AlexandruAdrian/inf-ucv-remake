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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.586340883392!2d23.80199531490585!3d44.31845381717663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d70a77e62e29%3A0x285d5119f51db2d2!2sStrada%20Alexandru%20Ioan%20Cuza%2013%2C%20Craiova!5e0!3m2!1sen!2sro!4v1588693939509!5m2!1sen!2sro"
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