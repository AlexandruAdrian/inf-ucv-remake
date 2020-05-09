import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import axios from 'axios';
/* Components */
import Home from "./components/Home";
import AdmittanceLicense from "./components/Admitere-Licenta";
import AdmittanceMaster from "./components/Admitere-Master";
import Teachers from "./components/Cadre-Didactice";
import StudyPrograms from "./components/Programe-Studiu";
import News from "./components/Anunturi";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Admin from "./components/Admin";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/login" component={Admin} />
        <Route path="/(admitere|admitere/licenta)" exact component={AdmittanceLicense} />
        <Route path="/admitere/master" component={AdmittanceMaster} />
        <Route path="/cadre-didactice" component={Teachers} />
        <Route path="/programe-studiu" component={StudyPrograms} />
        <Route path="/anunturi" component={News} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <footer>
        <p>Copyright &copy; 2020 All rights reserved</p>
      </footer>
    </Router>
  );
}

export default App;
