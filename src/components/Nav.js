import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link className="linkStyle" to='/'><li>Newest Stories</li></Link>
                <Link className="linkStyle" to='/search'><li>Search</li></Link>
                <Link className="linkStyle" to='/history'><li>History</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;