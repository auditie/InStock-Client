import React from 'react';
import edit from '../../assets/icons/edit-24px.svg';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import './InventoryItemDetails.scss';

const InventoryItemDetails = (props) => {
  const { itemName, warehouseName, description, category, status, quantity } = props.inventoryItem
  return (
    <div className='inventory-item'>
      <header className='inventory-item__header'>
        <div className='inventory-item__title-arrow'>
          <img src={backArrow} alt='back arrow' />
          <h1 className='inventory-item__title'>{itemName}</h1>
        </div>
        <div className='inventory-item__edit'>
          <img className='inventory-item__edit-image' src={edit} alt='edit' />
          <p className='inventory-item__edit-word'>Edit</p>
        </div>
      </header>
      <section className='inventory-item__info'>
        <article className='inventory-item__left-section'>
          <div className='inventory-item__description'>
            <h4>item description:</h4>
            <p>{description}</p>
          </div>
          <div>
            <h4>category:</h4>
            <p>{category}</p>
          </div>
        </article>
        <article className='inventory-item__right-section'>
          <div className='inventory-item__status-quantity'>
            <div>
              <h4>status:</h4>
              <p className={status === "In Stock" ? 'inventory-item__status-in-stock' : 'inventory-item__status-out-of-stock'}>{status}</p>
            </div>
            <div>
              <h4>quantity:</h4>
              <p>{quantity}</p>
            </div>
          </div>
          <div>
            <h4>warehouse:</h4>
            <p>{warehouseName}</p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default InventoryItemDetails;
