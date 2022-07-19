import './WarehouseItem.scss';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import rightArrow from '../../assets/icons/chevron_right-24px.svg';

const WarehouseItem = () => {
    return (
        <div className='warehouse-item'>
            <div className='warehouse-item--mobile'>
                <div>
                    <h4 className='warehouse-item__table-header'>WAREHOUSE</h4>
                    <a href='' className='warehouse-item__link'>Manhattan <img src={rightArrow} alt='right pointing arrow' className='warehouse-item__direct' /></a>
                    <h4 className='warehouse-item__table-header'>ADDRESS</h4>
                    <p className='warehouse-item__details'>503 Broadway, New York, USA</p>
                </div>
                <div>
                <h4 className='warehouse-item__table-header'>CONTACT NAME</h4>
                <p className='warehouse-item__details'>Parmin Aujla</p>
                <h4 className='warehouse-item__table-header'>CONTACT INFORMATION</h4>
                <p className='warehouse-item__details'>+1(647)504-0911<br></br>paujla@instock.com</p>
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