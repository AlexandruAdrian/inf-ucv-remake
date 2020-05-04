import React from 'react';
import "../../styles/home/Admittance.css";
import "../../styles/animations.css";
/* Components */
import AdmittanceTable from "./Admittance-table";
/* Custom Hooks */
import useIntersect from '../../hooks/useIntersect';

const Admittance = () => {
  const [setAdmittance, admittanceEntry, admittanceObserver] = useIntersect({ threshold: 0.4 });
  const [setMaster, masterEntry, masterObserver] = useIntersect({ threshold: 0.7 });
  let admittanceAnimation = '';
  let masterAnimation = '';

  if (admittanceEntry.isIntersecting) {
    admittanceAnimation = 'slide-up';
    admittanceObserver.unobserve(admittanceEntry.target);
  }

  if (masterEntry.isIntersecting) {
    masterAnimation = 'slide-up';
    masterObserver.unobserve(masterEntry.target);
  }

  const licentaData = {
    domeniulTitle: 'Domeniul de Licenta',
    locBuget: 10,
    locTaxa: 21,
    dataInscrieri: '9 - 16 septembrie 2019',
    domeniulDesc: 'Informatica (3 ani)',
    specializare: 'Informatica'
  }

  const masterData = {
    domeniulTitle: 'Domeniul de Master',
    locBuget: 10,
    locTaxa: 28,
    dataInscrieri: '13 - 18 septembrie 2019',
    domeniulDesc: 'Informatica (2 ani)',
    specializare: 'Metode si modele in inteligenta artificiala'
  }

  return (
    <section className="admittance">
      <div className={`licenta ${admittanceAnimation}`} ref={setAdmittance}>
        <h4>Admitere 2019</h4>
        <p>Departamentul de Informatica al Facultatii de Stiinte organizeaza concurs de admitere pentru urmatoarele programe de studii:</p>
        <p><strong>Ciclul 1: Licenta (Facultate)</strong> - Locuri libere pentru sesiunea de admitere septembrie 2019: </p>
        <AdmittanceTable data={licentaData} />
        <p>Taxa de scolarizare este de 3000 RON/an, platibili in transe</p>
        <p>Pentru detalii suplimentare consultati sectiunea <a href="/admitere/licenta">Admitere Licenta 2019</a></p>
      </div>
      <div className={`master ${masterAnimation}`} ref={setMaster}>
        <p><strong>Ciclul 2: Master</strong> - Locuri libere pentru sesiunea de admitere septembrie 2019:</p>
        <AdmittanceTable data={masterData} />
        <p>Pentru detalii suplimentare consultati sectiunea <a href="/admitere/master">Admitere Master 2019</a></p>
      </div>
    </section>
  );
};

export default Admittance;