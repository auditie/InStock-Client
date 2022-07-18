import React, { Component } from 'react';
import './WarehouseDetails.scss'
import { backArrow } from '../../assets/icons/arrow_back-24px.svg'
import { backArrow } from '../../assets/icons/arrow_back-24px.svg'

class WarehouseDetails extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={backArrow} alt='back arrow' />
                    <h1>Warehouse</h1>
                    
                </header>
            </div>
        );
    }
}

export default WarehouseDetails;
