import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import InStockLogo from '../../assets/logo/InStock-Logo_2x.png';
import React from 'react';


function Header() {

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={InStockLogo} alt="main-logo" ></img>
            </Link>

            <div className="header__nav">
                <NavLink
                    to="/" exact
                    className="header__nav--link"
                    activeClassName="header__nav--active"
                >Warehouses</NavLink>
                <NavLink
                    to="/inventory"
                    className="header__nav--link"
                    activeClassName="header__nav--active"
                >Inventory</NavLink>
            </div>
        </header>
    );


}

export default Header;