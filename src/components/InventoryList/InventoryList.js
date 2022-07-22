import './InventoryList.scss';
import sortIcon from '../../assets/icons/sort-24px.svg';
import InventoryItemMobile from '../../components/InventoryItemMobile/InventoryItemMobile';
import InventoryItemTablet from '../../components/InventoryItemTablet/InventoryItemTablet';

const InventoryList = ( { inventory } ) => {
    const columnTitles = ['INVENTORY ITEM', 'CATEGORY', 'STATUS', 'QTY', 'WAREHOUSE'];
    
    return (
        <>
            <div className='inventory-list__head'>
                <h1 className='inventory-list__head-title'>Inventory</h1>
                <div className='inventory-list__head--top-right'>
                    <input type='text' placeholder='Search...' className='inventory-list__head-search'></input>
                    <button className='inventory-list__head-cta'>+ Add New Item</button>

                </div>
            </div>
            <div className='inventory-list__column-titles'>
                {
                    columnTitles.map(title => (
                        <h4 className='inventory-list__column-title'>
                            {title}
                            <img src={sortIcon} alt='up and down arrows' className='inventory-list__column-title-icon'></img>
                        </h4>
                    ))
                }
                <h4 className='inventory-list__column-title inventory-list__column-title--last'>ACTIONS</h4>

            </div>
            <div className='inventory-list__items'>
            {
                inventory.map(item => 
                    <InventoryItemMobile key={item.id} item={item} />
                )
            } 
            {
                inventory.map(item => 
                    <InventoryItemTablet key={item.id} item={item} />
                )
            }
            </div>
        </>
    )
};

export default InventoryList;