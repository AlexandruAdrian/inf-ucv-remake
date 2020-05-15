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
import ExtendedArticle from "./components/Anunturi/Anunt-Extented";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Admin from "./components/Admin";
/* Contexts*/
import { AdminContextProvider } from "./context/admin-context";
import { NewsContextProvider } from "./context/news-context";
import { TeachersContextProvider } from "./context/teachers-context";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <Router>
      <AdminContextProvider>
        <NewsContextProvider>
          <TeachersContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/(admitere|admitere/licenta)" exact component={AdmittanceLicense} />
              <Route path="/admitere/master" component={AdmittanceMaster} />
              <Route path="/programe-studiu" component={StudyPrograms} />
              <Route path="/contact" component={Contact} />
              <Route path="/user/login" exact component={Admin} />
              <Route path="/cadre-didactice" component={Teachers} />
              <Route path="/anunturi" exact component={News} />
              <Route path="/anunturi/:newsId" component={ExtendedArticle} />
              <Route component={NoMatch} />
            </Switch>
          </TeachersContextProvider>
        </NewsContextProvider>
      </AdminContextProvider>
      <footer>
        <p>Copyright &copy; 2020 All rights reserved</p>
      </footer>
    </Router>
  );
}

export default App;
