import './HomePage.scss';
// import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

class HomePage extends Component {
    state = {
        warehouses: [],
        warehouseInventory: [],
        selectedWarehouse: {}
    };

    // set up axios
    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
        .then(response => {
            // console.log(response.data);
            this.setState({
                warehouses: response.data
            })
        })
    }


    render() {
        return (
            <Switch> 
                <Route path='/' exact component={WarehouseList}/>
                {/* <Route path='/:warehouseId' component={} /> */}
                {/* <Route path='/warehouses/:warehouseId/edit' component={} /> */}
                {/* <Route path='/warehouses/add' component={HomePage} /> */}
            </Switch>
        )
    }

}

export default HomePage;