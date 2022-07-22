import './Header.scss';
import { NavLink } from 'react-router-dom';
import InStockLogo from '../../assets/logo/InStock-Logo_2x.png';
import React from 'react';


function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={InStockLogo} alt="main-logo" ></img>
            <div className="header__nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "header__nav--active" : "header__nav--link")}
                >Warehouses</NavLink>
                <NavLink
                    to="/inventory"
                    className={({ isActive }) => (isActive ? "header__nav--active" : "header__nav--link")}
                >Inventory</NavLink>
            </div>
        </header>
    );


}

export default Header;