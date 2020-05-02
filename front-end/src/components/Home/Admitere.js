import React from 'react';
import "../../styles/Admitere.css";
import "../../styles/animations.css";
/* Components */
import AdmitereTable from "./Admitere-table";
/* Custom Hooks */
import useIntersect from '../../hooks/useIntersect';

const Admitere = () => {
  const [setAdmitere, admitereEntry, admitereObserver] = useIntersect({threshold: 0.6});
  const [setMaster, masterEntry, masterObserver] = useIntersect({threshold: 0.7});
  let admitereAnimation = '';
  let masterAnimation = '';

  if (admitereEntry.isIntersecting) {
    admitereAnimation = 'slide-up';
    admitereObserver.unobserve(admitereEntry.target);
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
    <section className="admitere">
      <div className={`licenta ${admitereAnimation}`} ref={setAdmitere}>
        <h4>Admitere 2019</h4>
        <p>Departamentul de Informatica al Facultatii de Stiinte organizeaza concurs de admitere pentru urmatoarele programe de studii:</p>
        <p><strong>Ciclul 1: Licenta (Facultate)</strong> - Locuri libere pentru sesiunea de admitere septembrie 2019: </p>
        <AdmitereTable data={licentaData} />
        <p>Taxa de scolarizare este de 3000 RON/an, platibili in transe</p>
      </div>
      <div className={`master ${masterAnimation}`} ref={setMaster}>
        <p>Pentru detalii suplimentare consultati sectiunea <a href="#">Admitere Licenta 2019</a></p>
        <p><strong>Ciclul 2: Master</strong> - Locuri libere pentru sesiunea de admitere septembrie 2019:</p>
        <AdmitereTable data={masterData}/>
        <p>Pentru detalii suplimentare consultati sectiunea <a href="#">Admitere Master 2019</a></p>
      </div>
    </section>
  );
};

export default Admitere;