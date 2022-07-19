import './WarehouseDetails.scss'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'
import WarehouseInventoryItem from '../WarehouseInventoryItem/WarehouseInventoryItem'


const WarehouseDetails = (props) =>{
  const { name, address, city, country } = props.warehouse;
  const { position, phone, email } = props.contact

  return (
    <div className='single-warehouse'>
      <header className='single-warehouse__header'>
        <img src={backArrow} alt='back arrow' />
        <h1 className='single-warehouse__title'>{name}</h1>
        <img className='single-warehouse__edit-image' src={edit} alt='edit icon' />
      </header>
      <article className='single-warehouse__details'>
        <div className='single-warehouse__address'>
          <h4>warehouse address:</h4>
          <p>{`${address}, ${city}, ${country}`}</p>
        </div>
        <div className='single-warehouse__contact'>
          <div>
            <h4>contact name:</h4>
            <p>{props.contact.name}</p>
            <p>{position}</p>
          </div>
          <div>
            <h4>contact information:</h4>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </article>
      {props.inventory.map(item => {
        return (
          <WarehouseInventoryItem
          key={item.id}
          itemName={item.itemName}
          category={item.category} 
          status={item.status}
          quantity={item.quantity}
          />
        )
      })}
    </div>
  );
}

export default WarehouseDetails;
