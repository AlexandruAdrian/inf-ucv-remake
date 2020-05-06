import React from 'react';
import "../../styles/admitere-licenta/Offer.css";
/* Components */
import OfferTable from "./Offer-table";
import MobileOfferTable from "./Mobile-Offer-table";

const Offer = () => {
  return (
    <section className="container white-bg-container admitere-offer">
      <h4>Cifra de scolarizare</h4>
      <p>Cifra de scolarizare pentru anul academic 2019 - 2020 pentru domeniul de licenta <em>Informatica</em> este urmatoarea:</p>
      <OfferTable buget="135" taxa="40" />
      <MobileOfferTable buget="135" taxa="40" />
      <p><span>*</span> - Taxa de scolarizare este de 3000 RON/an, platibili in transe</p>

      <h4>Locuri libere in sesiunea septembrie 2019</h4>
      <OfferTable buget="10" taxa="21" />
      <MobileOfferTable buget="10" taxa="21" />
    </section>
  )
}

export default Offer;