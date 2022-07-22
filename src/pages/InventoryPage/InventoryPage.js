import './InventoryPage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails';
import InventoryList from '../../components/InventoryList/InventoryList';
import AddInventory from '../../components/AddInventory/AddInventory';
//import axios from 'axios';

const API_URL = 'http://localhost:8080';

class InventoryPage extends Component {
    state = {
        inventory: [],
        warehouseInventory: [],
        inventoryItem: null
    };

<<<<<<< HEAD
=======
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

    getInventory = (id) => {
        axios.get(`${API_URL}/inventories/${id}`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    inventoryItem: response.data
                });
            });
    }

>>>>>>> develop
    // set up axios
    componentDidMount() {
        const inventoryId = this.props.match.params.inventoryId;
        console.log(inventoryId);
        axios.get(`${API_URL}/inventories`)
            .then(response => {
                console.log(inventoryId);
                this.setState({
                    inventory: response.data
                });
                if (inventoryId) {
                    console.log(inventoryId)
                    this.getInventory(inventoryId);
                }
            })
    }

<<<<<<< HEAD
=======
    // axios for page did update
    componentDidUpdate(prevProps) {
        const previousId = prevProps.match.params.inventoryId;
        const currentId = this.props.match.params.inventoryId;

        if (previousId !== currentId) {
            this.getInventory(currentId)
        }
    }

>>>>>>> develop
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

                <Route path='/inventory/:inventoryId' component={(routerProps) => {
                    return (this.state.inventoryItem !== null ? (
                        <InventoryItemDetails
                            inventoryItem={this.state.inventoryItem}
                            {...routerProps}
                        />
                    ) : <h1>loading</h1>)
                }} />
                {/* <Route path='/inventory/:inventoryId/edit' component={InventoryPage} />
                        <Route path='/inventory/add' component={InventoryPage} /> */}
            </Switch >

        )
    }
}

export default InventoryPage;
