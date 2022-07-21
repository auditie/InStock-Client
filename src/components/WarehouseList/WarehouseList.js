import './WarehouseList.scss';
// import { Link } from 'react-router-dom';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
import sortIcon from '../../assets/icons/sort-24px.svg';

const WarehouseList = ( { warehouses } ) => {
    const columnTitles = ['WAREHOUSE', 'ADDRESS', 'CONTACT NAME', 'CONTACT INFORMATION'];
    
    return (
        <div>
            <div className='warehouse-list__head'>
                <h1 className='warehouse-list__head-title'>Warehouses</h1>
                <div className='warehouse-list__head--top-right'>
                    <input type='text' placeholder='Search...' className='warehouse-list__head-search'></input>
                    <button className='warehouse-list__head-cta'>+ Add New Warehouse</button>

                </div>
            </div>
            <div className='warehouse-list__column-titles'>
                {
                    columnTitles?.map(title => (
                        <h4 className='warehouse-list__column-title'>
                            {title}
                            <img src={sortIcon} alt='up and down arrows' className='warehouse-list__column-title-icon'></img>
                        </h4>
                    ))
                }
                <h4 className='warehouse-list__column-title warehouse-list__column-title--last'>ACTIONS</h4>

            </div>
            <div className='warehouse-list__warehouses'>
            {
                warehouses?.map(warehouse => 
                    <WarehouseItem key={warehouse.id} warehouse={warehouse} />
                )
            }
            </div>
        </div>
    )
};

export default WarehouseList;
