import './Header.scss';
// import { Link } from 'react-router-dom';
import InStockLogo from '../../assets/logo/InStock-Logo_2x.png';
import React from 'react';

class Header extends React.Component {
    state = {
        color: ''
    }
    onChange = () => {
        this.setState({ color: '#13182c' });
    }

    render() {
        return (
            <header className="header">
                <img className="header__logo" src={InStockLogo} alt="main-logo" ></img>
                <div className="header__nav">
                    <h3 style={{ backgroundColor: this.state.color }} onClick={this.onChange} className="header__nav--title" >Warehouses</h3>
                    <h3 style={{ backgroundColor: this.state.color }} onClick={this.onChange} className="header__nav--title" >Inventory</h3>
                    {/* <Link className="header__nav--title" to="/"><h3>Warehouses</h3></Link>
                <Link className="header__nav--title" to="/inventory"> <h3>Inventory</h3></Link> */}

                </div>
            </header>
        )
    }

}

export default Header;