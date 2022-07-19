import React from 'react';
import './WarehouseInventoryItem.scss';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import trash from '../../assets/icons/delete_outline-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';
import sort from '../../assets/icons/sort-24px.svg';

const WarehouseInventoryItem = (props) => {
  return (
    //Mobile
    <div>
    <section className='warehouse-inventory'>
    <article className='warehouse-inventory__item-info'>
      <div className='warehouse-inventory__column'>
        <div className='warehouse-inventory__block'>
          <h4>inventory item</h4>
            <div className='warehouse-inventory__item'>
              <p className='warehouse-inventory__item-name'>{props.itemName}</p>
              <img src={chevron} alt='chevron right' />
            </div>
        </div>
        <div>
          <h4>category</h4>
          <p>{props.category}</p>
        </div>
      </div>
      <div className='warehouse-inventory__column'>
        <div className='warehouse-inventory__block warehouse-inventory__block--status-block'>
          <h4>status</h4>
          <p className={props.status === "In Stock" ? 'warehouse-inventory__status-in-stock' : 'warehouse-inventory__status-out-of-stock'}>{props.status}</p>
        </div>
        <div>
          <h4>qty</h4>
          <p>{props.quantity}</p>
        </div>
      </div>
      </article>
      <div className='warehouse-inventory__options'>
        <img src={trash} alt='delete item'/>
        <img src={edit} alt='edit item'/>
      </div>
    </section>

    {/*Tablet and Desktop*/}
      <section className='warehouse-inventory__tablet-desktop'>
        <div>
          <div>
            <h4>inventory item</h4>
            <img src={sort} alt='sort' />
          </div>
          <div>
            <h4>category</h4>
            <img src={sort} alt='sort' />
          </div>
          <div>
            <h4>status</h4>
            <img src={sort} alt='sort' />
          </div>
          <div>
            <h4>quantity</h4>
            <img src={sort} alt='sort' />
          </div>
          <div>
            <h4>actions</h4>
            <img src={sort} alt='sort' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseInventoryItem;
