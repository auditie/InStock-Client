import './HomePage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import AddWarehouse from '../../components/AddWarehouse/AddWarehouse';
//import axios from 'axios';

const API_URL = 'http://localhost:8080';

class HomePage extends Component {
    state = {
        warehouses: [],
        warehouseInventory: [],
        selectedWarehouse: null
    };

    fetchWarehouses = warehouseList => {
        axios
            .get(`%{API_URL}/warehouses`)
            .then(response => {
                this.setState({
                    warehouses: response.data
                })
                return response.data;
            })
    }

    getWarehouse = (id) => {
        axios.get(`${API_URL}/warehouses/${id}`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    selectedWarehouse: response.data
                })
            })
    }

    getWarehouseInventory = (id) => {
        axios.get(`${API_URL}/warehouses/${id}/inventory`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    warehouseInventory: response.data
                })
            })
    }

    // set up axios
    componentDidMount() {
        const warehouseId = this.props.match.params.warehouseId;
        axios.get(`${API_URL}/warehouses`)
            .then(response => {
                this.setState({
                    warehouses: response.data
                });
            })
        if (warehouseId) {
            this.getWarehouse(warehouseId);
            this.getWarehouseInventory(warehouseId);
        }
    }

    // axios for page did update
    componentDidUpdate(prevProps) {
        const previousWarehouseId = prevProps.match.params.warehouseId;
        const currentWarehouseId = this.props.match.params.warehouseId;

        if (previousWarehouseId !== currentWarehouseId) {
            this.getWarehouse(currentWarehouseId);
            this.getWarehouseInventory(currentWarehouseId);
        }
    }

    render() {
        if (!this.state.warehouses) {
            return (
                <p>Loading...</p>
            )
        }
        return (
            <Switch>
                <Route path='/' exact component={(routerProps) => {
                    return (
                        <WarehouseList
                            warehouses={this.state.warehouses}
                            handleWarehouse={this.getWarehouse}
                            {...routerProps}
                        />
                    )
                }} />
                <Route path='/warehouses/add' exact component={AddWarehouse} />
                <Route path='/warehouses/:warehouseId' component={(routerProps) => {
                    return (this.state.selectedWarehouse !== null ? (
                        <WarehouseDetails
                            warehouse={this.state.selectedWarehouse}
                            inventory={this.state.warehouseInventory}
                            {...routerProps}
                        />
                    ) : <h1>loading</h1>)
                }} />
                {/* <Route path='/warehouses/:warehouseId/edit' component={} /> */}

            </Switch>

        )
    }
}

export default HomePage;
