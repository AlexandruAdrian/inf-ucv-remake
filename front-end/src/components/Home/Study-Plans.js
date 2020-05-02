import React from 'react';
import "../../styles/Study-Plans.css";
const StudyPlans = () => {

  return (
    <div className="study-plans">
      <h4>Planuri de invatamant</h4>
      <h5>Ciclul I - Licenta (3 ani)</h5>
      <p><em>Informatica:</em></p>
      <ul>
        <li>
          <a href="http://inf.ucv.ro/documents/invatamant/planuri/licenta/plan-invatamant-licenta-2018-2019-I.pdf" target="_blank">
            Anul I
          </a>
            , promotia 2018-2021
        </li>
        <li>
          <a href="http://inf.ucv.ro/documents/invatamant/planuri/licenta/plan-invatamant-licenta-2018-2019-II.pdf" target="_blank">
            Anul II
          </a>
          , promotia 2017-2020
        </li>
        <li>
          <a href="http://inf.ucv.ro/documents/invatamant/planuri/licenta/plan-invatamant-licenta-2018-2019-III.pdf" target="_blank">
          Anul III
          </a>
          , promotia 2016-2019
        </li>
      </ul>

      <h5>Ciclul II - Master</h5>
      <p><em>Informatica- Metode si Modele ale Inteligentei Artificiale</em></p>
      <ul>
        <li>
          <a href="http://cis01.central.ucv.ro/evstud/planuri/index.php?an_univ=2017&facultate=500013&ciclu=4&forma=2&specializare=500784&an_stud=1&cmdExecuta=Execut%C4%83" target="_blank">
            Anul I
          </a>
          , promotia 2015-2017, (planul promotiei: <a href="http://inf.ucv.ro/documents/licenta/planuri/2015/PLAN%20INVATAMANT-MASTERAT-%20MIA-2015-2016%20A1.pdf" target="_blank">
            a1
          </a>, <a href="http://inf.ucv.ro/documents/licenta/planuri/2015/PLAN%20INVATAMANT-MASTERAT-%20MIA-2015-2016%20A2.pdf" target="_blank">
            a2
          </a>)
        </li>
        <li>
          <a href="http://cis01.central.ucv.ro/evstud/planuri/index.php?an_univ=2014&facultate=500013&ciclu=4&forma=2&specializare=500784&an_stud=2&cmdExecuta=Execut%C4%83" target="_blank">
            Anul II
          </a>
          , promotia 2014-2016, (planul promotiei: <a href="http://inf.ucv.ro/documents/invatamant/planuri/master/plan-invatamant-MIA-2014-2015-1.pdf" target="_blank">
            a1
          </a>, <a href="http://inf.ucv.ro/documents/invatamant/planuri/master/plan-invatamant-MIA-2014-2015-2.pdf" target="_blank">
            a2
          </a>)
        </li>
      </ul>

      <p><em>Informatica - Tehnici avansate pentru prelucrarea informatiei</em></p>
      <ul>
      <li>
        Anul I, promotia 2018-2020, (planul promotiei: <a href="http://inf.ucv.ro/documents/invatamant/planuri/master/plan-invatamant-master-TPI-2018-2019-I.pdf" target="_blank">
          a1
        </a>, <a href="http://inf.ucv.ro/documents/invatamant/planuri/master/plan-invatamant-master-TPI-2018-2019-II.pdf" target="_blank">
          a2
        </a>)
      </li>
      </ul>
    </div>
  );
}

export default StudyPlans;