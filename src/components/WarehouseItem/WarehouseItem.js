import './WarehouseItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

const WarehouseItem = ( { warehouse } ) => {
    console.log(warehouse)
    return (
        <div className='warehouse-item'>
            <div className='warehouse-item--mobile'>
                <div className='warehouse-item--mobile-column'>
                    <h4 className='warehouse-item__table-header'>WAREHOUSE</h4>
                    {/* to link to warehouse inventory */}
                    <a href='/' className='warehouse-item__link'>{warehouse.name} <img src={rightArrow} alt='right pointing arrow' className='warehouse-item__direct' /></a>
                    <h4 className='warehouse-item__table-header'>ADDRESS</h4>
                    <p className='warehouse-item__details'>{warehouse.address}, {warehouse.city}</p>
                </div>
                <div className='warehouse-item--mobile-column'>
                    <h4 className='warehouse-item__table-header'>CONTACT NAME</h4>
                    <p className='warehouse-item__details'>{warehouse.contact.name}</p>
                    <h4 className='warehouse-item__table-header'>CONTACT INFORMATION</h4>
                    <p className='warehouse-item__details'>{warehouse.contact.phone}<br></br>{warehouse.contact.email}</p>
                </div>
            </div>
            <div className='warehouse-item__manage'>
                <img src={deleteIcon} alt='trash can outline' className='warehouse-item__manage-icon'></img>
                <img src={editIcon} alt='pen edit outline' className='warehouse-item__manage-icon'></img>
            </div>
        </div>
    )
}

export default WarehouseItem
