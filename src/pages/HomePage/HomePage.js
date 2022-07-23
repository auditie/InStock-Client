import './HomePage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import AddWarehouse from '../../components/AddWarehouse/AddWarehouse';
import DeleteWarehouse from '../../components/DeleteWarehouse/DeleteWarehouse';
import EditWarehouse from '../../components/EditWarehouse/EditWarehouse';
//import axios from 'axios';

const API_URL = 'http://localhost:8080';

class HomePage extends Component {
    state = {
        warehouses: [],
        warehouseInventory: [],
		showWarehouseDeleteModal: false,
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
                this.setState({
                    selectedWarehouse: response.data
                })
            })
    }

    getWarehouseInventory = (id) => {
        axios.get(`${API_URL}/warehouses/${id}/inventory`)
            .then((response) => {
                this.setState({
                    warehouseInventory: response.data
                })
            })
    }

	// Delete Warehouse Functions //
	showDeleteWarehouse = (selectedId) => {
		this.setState({ showWarehouseDeleteModal: true });
		this.setState({ selectedWarehouse: selectedId });
	}

	hideDeleteWarehouse = () => {
		this.setState({ showWarehouseDeleteModal: false });
		this.setState({ selectedWarehouse: null });
	}

	handleDeleteWarehouse = (e) => {
		// axios delete call 
		axios.delete(`${API_URL}/warehouses/${this.state.selectedWarehouse}`)
			.then(result => {
				console.log(`Warehouse with id of ${this.state.selectedWarehouse} successfully deleted`);
				return axios.get(`${API_URL}/warehouses`)
			})		
			.then(result => {
				this.setState({ warehouses: result.data });
				this.setState({ showWarehouseDeleteModal: false });
			})
			.catch(err => {
				console.log(`There was an error deleting warehouse with id : ${this.state.selectedWarehouse}, with err ${err}`);
			});
	}

	getWarehouseName = (id) => {
		return this.state.warehouses.find( warehouse => warehouse.id === id).name;
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
        if (prevProps.location.pathname === "/warehouses/add" || prevProps.location.pathname === `/warehouses/${previousWarehouseId}/edit`) {
            axios.get(`${API_URL}/warehouses`)
                .then(response => {
                    this.setState({
                        warehouses: response.data
                    });
                })
        }

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
			<>
				<Switch>
					<Route path='/' exact component={(routerProps) => {
						return (
							<WarehouseList
								warehouses={this.state.warehouses}
								handleWarehouse={this.getWarehouse}
								showDeleteWarehouse={this.showDeleteWarehouse}
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
				{this.state.showWarehouseDeleteModal && 
					<DeleteWarehouse 
						warehouseName={this.getWarehouseName(this.state.selectedWarehouse)}
						hideDeleteWarehouse={this.hideDeleteWarehouse} 
						handleDeleteWarehouse={(e) => {
							this.handleDeleteWarehouse(e);
						}}
					/>
				}
			</>
        )
    }
}

export default HomePage;
