import React, { Component } from 'react';
import './WarehouseDetails.scss'
import { backArrow } from '../../assets/icons/arrow_back-24px.svg'
import { edit } from '../../assets/icons/edit-24px.svg'

const WarehouseDetails = (props) =>{
    const { address, name, jobTitle, phoneNumber, email } = props.warehouse

    return (
        <div>
            <header>
                <img src={backArrow} alt='back arrow' />
                <h1>Warehouse</h1>
                <img srv={edit} alt='edit icon' />
            </header>
            <article>
                <div>
                    <h4>warehouse address:</h4>
                    <p>{address}</p>
                </div>
                <div>
                    <div>
                        <h4>contact name:</h4>
                        <p>{name}</p>
                        <p>{jobTitle}</p>
                    </div>
                    <div>
                        <h4>contact information:</h4>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </article>
            {props.warehouse.map(each => {
                return (
                    <WarehouseInventoryItem
                    key={id}
                    item={item}
                    category={category} 
                    />
                )
            })}
        </div>
    );
}

export default WarehouseDetails;
