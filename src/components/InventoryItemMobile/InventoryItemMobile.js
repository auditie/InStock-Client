import './InventoryItemMobile.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

const InventoryItemMobile = ( { item } ) => {
    return (
        <div className='inventory-item'>
            <div className='inventory-item--mobile'>
                <div className='inventory-item--mobile-column'>
                    <h4 className='inventory-item__table-header'>INVENTORY ITEM</h4>
                    {/* to link to inventory inventory */}
                    <a href='/' className='inventory-item__link'>{item.itemName} <img src={rightArrow} alt='right pointing arrow' className='inventory-item__direct' /></a>
                    <h4 className='inventory-item__table-header'>CATEGORY</h4>
                    <p className='inventory-item__details'>{item.category}</p>
                </div>
                <div className='inventory-item--mobile-column'>
                    {/* need to work on this styling for status */}
                    <h4 className='inventory-item__table-header'>STATUS</h4>
                    <p className='inventory-item__details'>{item.status}</p>
                    <h4 className='inventory-item__table-header'>QTY</h4>
                    <p className='inventory-item__details'>{item.quantity}</p>
                    <h4 className='inventory-item__table-header'>WAREHOUSE</h4>
                    <p className='inventory-item__details'>{item.warehouseName}</p>
                </div>
            </div>
            <div className='inventory-item__manage'>
                <img src={deleteIcon} alt='trash can outline' className='inventory-item__manage-icon'></img>
                <img src={editIcon} alt='pen edit outline' className='inventory-item__manage-icon'></img>
            </div>
        </div>
    )
}

export default InventoryItemMobile;