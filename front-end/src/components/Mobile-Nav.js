import React, { useState, useContext } from 'react';
import "../styles/mobile-nav.css";
/* Components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* Context */
import { AdminContext } from "../context/admin-context";

const MobileNav = () => {
  const [visible, setVisible] = useState(false);

  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const handleMenu = () => {
    setVisible(visible => !visible);
  }

  const handleLogOut = () => {
    localStorage.removeItem("Token");
    setIsAdmin(false);
  }

  return (
    <nav className="mobile-nav">
      <div className="trigger" onClick={handleMenu}>
        <FontAwesomeIcon icon="bars" size="lg" />
      </div>

      {
        visible ? (
          <ul className='menu show-mobile-menu'>
            <li onClick={handleMenu}><FontAwesomeIcon icon="times" size="lg" /></li>
            <li><a href="/">Home</a></li>
            <li>
              <p>Admitere</p>
              <ul className="mobile-dropdown hide-mobile-dropdown">
                <li><a href="/admitere/licenta">Admitere 2019 Licenta</a></li>
                <li><a href="/admitere/master">Admitere 2019 Master</a></li>
              </ul>
            </li>
            <li><a href="/cadre-didactice">Cadre Didactice</a></li>
            <li><a href="/programe-studiu">Programe de Studii</a></li>
            <li><a href="/anunturi">Anunturi</a></li>
            <li><a href="/contact">Contact</a></li>
            {isAdmin && <li onClick={handleLogOut} className="log-out-btn">Log Out</li>}
          </ul>
        ) : (
            <ul className='menu hide-mobile-menu'>
              <li onClick={handleMenu}><FontAwesomeIcon icon="times" /></li>
              <li><a href="/">Home</a></li>
              <li>
                <a href="/admitere">Admitere</a>
                <ul className="mobile-dropdown">
                  <li><a href="/admitere/licenta">Admitere 2019 Licenta</a></li>
                  <li><a href="/admitere/master">Admitere 2019 Master</a></li>
                </ul>
              </li>
              <li><a href="/cadre-didactice">Cadre Didactice</a></li>
              <li><a href="/programe-studiu">Programe de Studii</a></li>
              <li><a href="/anunturi">Anunturi</a></li>
              <li><a href="/contact">Contact</a></li>
              {isAdmin && <li onClick={handleLogOut} className="log-out-btn">Log Out</li>}
            </ul>
          )
      }

    </nav >
  )
}

export default MobileNav;