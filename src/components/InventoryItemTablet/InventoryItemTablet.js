import './InventoryItemTablet.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

const InventoryItemTablet = ( { item } ) => {
    console.log(item.status)
    return (
        <div className='inventory-item-tablet'>
            <a href='/' className='inventory-item-tablet__link'>{item.itemName} 
                <img src={rightArrow} alt='right pointing arrow' className='inventory-item-tablet__direct' />
            </a>
            <p className='inventory-item-tablet__details inventory-item-tablet__category'>{item.category}</p>
            <p className={item.status === "In Stock" ? 'inventory-item-tablet__in-stock' : 'inventory-item-tablet__out-of-stock'}>{item.status}</p>
            <p className='inventory-item-tablet__details  inventory-item-tablet__quantity'>{item.quantity}</p>
            <p className='inventory-item-tablet__details  inventory-item-tablet__warehouse'>{item.warehouseName}</p>
            <div className='inventory-item-tablet__manage'>
                <img src={deleteIcon} alt='trash can outline' className='inventory-item-tablet__manage-icon'></img>
                <img src={editIcon} alt='pen edit outline' className='inventory-item-tablet__manage-icon'></img>
            </div>
        </div>
    )
}

export default InventoryItemTablet