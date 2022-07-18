import './HomePage.scss';
// import axios from 'axios';
import { Component } from 'react';
import WarehouseList from '../../components/WarehouseList/WarehouseList';

class HomePage extends Component {
    state = {
        warehouses: [],
        selectedWarehouse: {}
    };

    // set up axios

    render() {
        return (
            <div className='home-page'>
                <WarehouseList />
            </div>
        )
    }

}

export default HomePage;