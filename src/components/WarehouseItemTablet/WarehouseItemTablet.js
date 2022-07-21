import './WarehouseItemTablet.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

const WarehouseItemTablet = ( { warehouse } ) => {
    return (
        <div className='warehouse-item-tablet'>
            {/* to link to warehouse inventory */}
            <a href='/' className='warehouse-item-tablet__link'>{warehouse.name} 
                <img src={rightArrow} alt='right pointing arrow' className='warehouse-item-tablet__direct' />
            </a>
            <p className='warehouse-item-tablet__details'>{warehouse.address}, {warehouse.city}</p>
            <p className='warehouse-item-tablet__details--name'>{warehouse.contact.name}</p>
            <p className='warehouse-item-tablet__contact-info'>{warehouse.contact.phone}<br></br>{warehouse.contact.email}</p>
            <div className='warehouse-item-tablet__manage'>
                <img src={deleteIcon} alt='trash can outline' className='warehouse-item-tablet__manage-icon'></img>
                <img src={editIcon} alt='pen edit outline' className='warehouse-item-tablet__manage-icon'></img>
            </div>
        </div>
    )
}

export default WarehouseItemTablet