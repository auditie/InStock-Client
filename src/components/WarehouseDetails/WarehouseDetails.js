import './WarehouseDetails.scss'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import edit from '../../assets/icons/edit-24px.svg'

const WarehouseDetails = (props) =>{
  const { name, address, city, country } = props.warehouse;
  const { position, phone, email } = props.contact

  return (
    <div>
      <header>
        <img src={backArrow} alt='back arrow' />
        <h1>{name}</h1>
        <img srv={edit} alt='edit icon' />
      </header>
      <article>
        <div>
          <h4>warehouse address:</h4>
          <p>{`${address}, ${city}, ${country}`}</p>
        </div>
        <div>
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
      {/*props.warehouse.map(each => {
        return (
          <WarehouseInventoryItem
          key={id}
          item={item}
          category={category} 
          />
        )
      })*/}
    </div>
  );
}

export default WarehouseDetails;
