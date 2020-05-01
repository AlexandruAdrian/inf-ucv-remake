import React, {useState, useEffect} from 'react';
import "../styles/Nav.css";
/* Custom Hooks */
import useScrollTracker from "../hooks/useScrollTracker";

const Nav = ({headerHeight}) => {
    const [whiteBG, setWhiteBG] = useState(false);
    const {visible, prevScrollPos} = useScrollTracker();
    let style = "hide-nav";
    // Fix initially hidden nav if refreshed
    useEffect(() => {
        const isWhite = prevScrollPos > (headerHeight / 2) - 100;
        setWhiteBG(isWhite);
    }, [headerHeight, prevScrollPos]);

    if (visible && whiteBG) style = "white-nav";
    else if (visible && !whiteBG) style = "show-nav";
    else style = "hide-nav";


    return (
        <nav className={style}>
            <ul>
                <li>Home</li>
                <li>Admitere</li>
                <li>Cadre Didactice</li>
                <li>Programe Studiu</li>
                <li>Anunturi</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;