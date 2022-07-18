import './HomePage.scss';
// import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';

class HomePage extends Component {
    state = {
        warehouses: [],
        selectedWarehouse: {}
    };

    // set up axios

    render() {
        return (
            <Switch> 
                <Route path='/' component={WarehouseList}/>
            </Switch>
        )
    }

}

export default HomePage;