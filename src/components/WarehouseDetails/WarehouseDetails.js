import './WarehouseDetails.scss'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import WarehouseInventoryItem from '../WarehouseInventoryItem/WarehouseInventoryItem'
import sort from '../../assets/icons/sort-24px.svg';


const WarehouseDetails = (props) =>{
  const { name, address, city, country } = props.warehouse;
  const { position, phone, email } = props.contact

  return (
    <div className='single-warehouse'>
    <section>
      <header className='single-warehouse__header'>
        <img src={backArrow} alt='back arrow' />
        <h1 className='single-warehouse__title'>{name}</h1>
        <div className='single-warehouse__edit'>
          <img className='single-warehouse__edit-image' src={edit} alt='edit icon' />
          <p className='single-warehouse__edit-word'>Edit</p>
        </div>
      </header>
      <article className='single-warehouse__details'>
        <div className='single-warehouse__address'>
          <h4>warehouse address:</h4>
          <p>{`${address}, ${city}, ${country}`}</p>
        </div>
        <div className='single-warehouse__contact'>
          <div className='single-warehouse__contact-info'>
            <h4>contact name:</h4>
            <p>{props.contact.name}</p>
            <p>{position}</p>
          </div>
          <div className='single-warehouse__contact-info'>
            <h4>contact information:</h4>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </article>
      <section className='single-warehouse__tablet-desktop'>
      <div className='single-warehouse__table-headers'>
        <div className='single-warehouse__item-header'>
          <h4>inventory item</h4>
          <img src={sort} alt='sort' />
        </div>
        <div className='single-warehouse__category-header'>
          <h4>category</h4>
          <img src={sort} alt='sort' />
        </div>
        <div className='single-warehouse__status-header'>
          <h4>status</h4>
          <img src={sort} alt='sort' />
        </div>
        <div className='single-warehouse__quantity-header'>
          <h4>quantity</h4>
          <img src={sort} alt='sort' />
        </div>
        <div className='single-warehouse__action-header'>
          <h4>actions</h4>
        </div>
      </div>
    </section>
      {props.inventory.map(item => {
        return (
          <WarehouseInventoryItem className='single-warehouse__mobile'
          key={item.id}
          itemName={item.itemName}
          category={item.category} 
          status={item.status}
          quantity={item.quantity}
          />
        )
      })}
      </section>
    </div>
  );
}

export default WarehouseDetails;
