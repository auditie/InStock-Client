import React, { Component } from 'react';
import './WarehouseDetails.scss'
import { backArrow } from '../../assets/icons/arrow_back-24px.svg'
import { edit } from '../../assets/icons/edit-24px.svg'

class WarehouseDetails extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={backArrow} alt='back arrow' />
                    <h1>Warehouse</h1>
                    <img srv={edit} alt='edit icon' />
                </header>
            </div>
        );
    }
}

export default WarehouseDetails;
