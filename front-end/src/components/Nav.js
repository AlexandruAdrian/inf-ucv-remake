import React, {useState, useEffect} from 'react';
import "../styles/Nav.css";
/* Custom Hooks */
import useScrollTracker from "../hooks/useScrollTracker";

const Nav = ({headerHeight}) => {
    const [whiteBG, setWhiteBG] = useState(false);
    const {visible, prevScrollPos} = useScrollTracker();

    useEffect(() => {
        const isWhite = prevScrollPos > (headerHeight / 2) - 80;
        setWhiteBG(isWhite);

    }, [headerHeight, prevScrollPos]);


    return (
        <nav className={visible ? whiteBG? "white-nav" : "show-nav" : "hide-nav"}>
            <ul>
                <li>Home</li>
                <li>Admitere</li>
                <li>Programe Studiu</li>
                <li>Cadre Didactice</li>
                <li>Anunturi</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;