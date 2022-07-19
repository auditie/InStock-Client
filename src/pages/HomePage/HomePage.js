import './HomePage.scss';
// import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';

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
                <Route 
                    path='/warehouses/:selectedWarehouse' 
                    render={(routerProps) => (
                        <WarehouseDetails warehouse={this.state.selectedWarehouse} {...routerProps}/>
                    )}/>
            </Switch>
        )
    }

}

export default HomePage;
