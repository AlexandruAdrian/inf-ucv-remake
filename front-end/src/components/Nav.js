import React, { useState, useEffect, useContext } from 'react';
import "../styles/Nav.css";
/* Custom Hooks */
import useScrollTracker from "../hooks/useScrollTracker";
/* Context */
import { AdminContext } from "../context/admin-context";

const Nav = ({ headerHeight, history }) => {
    const [whiteBG, setWhiteBG] = useState(false);
    const { visible, prevScrollPos } = useScrollTracker();
    let style = "hide-nav";
    let dropdownStyle = ""

    const { isAdmin, setIsAdmin } = useContext(AdminContext);

    useEffect(() => {
        const isWhite = prevScrollPos > (headerHeight / 2) - 100;
        setWhiteBG(isWhite);
    }, [headerHeight, prevScrollPos]);

    if (visible && whiteBG) {
        style = "white-nav";
        dropdownStyle = "admitere-white-dropdown";
    }
    else if (visible && !whiteBG) {
        style = "show-nav";
        dropdownStyle = "admitere-dropdown";
    }
    else {
        style = "hide-nav";
        dropdownStyle = "hide-dropdown";
    }

    const handleLogOut = () => {
        localStorage.removeItem("Token");
        setIsAdmin(false);
    }

    return (
        <nav className={`desktop-nav ${style}`}>
            <ul>
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/admitere">Admitere</a>
                    <ul className={`dropdown ${dropdownStyle}`}>
                        <li><a href="/admitere/licenta">Admitere 2019 Licenta</a></li>
                        <li><a href="/admitere/master">Admitere 2019 Master</a></li>
                    </ul>
                </li>
                <li><a href="/cadre-didactice">Cadre Didactice</a></li>
                <li><a href="/programe-studiu">Programe de Studii</a></li>
                <li><a href="/anunturi">Anunturi</a></li>
                <li><a href="/contact">Contact</a></li>
                {isAdmin && <li className='log-out-btn' onClick={handleLogOut}>Log Out</li>}
            </ul>
        </nav>
    );
};

export default Nav;