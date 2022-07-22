import './InventoryPage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddInventory from '../../components/AddInventory/AddInventory';
// import WarehouseList from '../../components/WarehouseList/WarehouseList';
// import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails';
import InventoryList from '../../components/InventoryList/InventoryList';
//import axios from 'axios';

const API_URL = 'http://localhost:8080';

class InventoryPage extends Component {
    state = {
        inventory: [],
        warehouseInventory: [],
        selectedWarehouse: {}
    };

    // fetchInventory = inventoryList => {
    //     axios
    //         .get(`%{API_URL}/inventories/inventory`)
    //         .then(response => {
    //             this.setState({
    //                 warehouses: response.data
    //             })
    //             return response.data;
    //         })
    // }

    // set up axios
    componentDidMount() {
        axios.get(`${API_URL}/inventories`)
            .then(response => {
                // console.log(response.data);
                this.setState({
                    inventory: response.data
                })
                return response.data;
            })
    }

    // axios for page did update
    // componentDidUpdate(prevState) {
    //     const previousState = this.state.warehouseList;

    //     if(prevState !== )

    // }

    render() {
        if (!this.state.inventory) {
            return (
                <p>Loading...</p>
            )
        }
        return (
            <Switch>
                <Route path='/inventory' exact component={(routerProps) => {
                    return (
                        <InventoryList
                            inventory={this.state.inventory}
                            {...routerProps}
                        />
                    )
                }} />
                <Route path='/inventory/add' exact component={AddInventory} />
                {/* <Route path='/inventory/:selectedInventory' component={InventoryPage} />
                        <Route path='/inventory/:selectedInventory/edit' component={InventoryPage} />*/}

            </Switch>

        )
    }
}

export default InventoryPage;
