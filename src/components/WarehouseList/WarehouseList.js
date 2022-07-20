import './WarehouseList.scss';
import { Link } from 'react-router-dom';

const WarehouseList = (props) => {
    return (
        <div className='warehouse-list'>
            {/*(<div className='warehouse-list__head'>
                <h1 className='warehouse-list__head-title'>Warehouses</h1>
                <input type='text' placeholder='Search...' className='warehouse-list__head-search'></input>
    <button className='warehouse-list__head-cta'>+ Add New Warehouse</button>
    </div>*/}
                <Link to={'/warehouses/' + props.id} onClick={props.handleClick}>
                hello
                </Link>

        </div>
    )
};

export default WarehouseList;
