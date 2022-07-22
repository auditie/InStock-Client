import './HomePage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import AddWarehouse from '../../components/AddWarehouse/AddWarehouse';
import DeleteWarehouse from '../../components/DeleteWarehouse/DeleteWarehouse';
//import axios from 'axios';

const API_URL = 'http://localhost:8080';

class HomePage extends Component {
    state = {
        warehouses: [],
        warehouseInventory: [],
        selectedWarehouse: {},
		showWarehouseDeleteModal: false
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

    // set up axios
    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
            .then(response => {
                //console.log(response.data);
                this.setState({
                    warehouses: response.data
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
								{...routerProps}
							/>
						)
					}} />
					{/* <Route path='/:warehouseId' component={} /> */}
					{/* <Route path='/warehouses/:warehouseId/edit' component={} /> */}
					{/* <Route path='/warehouses/add' component={AddWarehouse} /> */}
				</Switch>
				<DeleteWarehouse/>
			</>
        )
    }
}

export default HomePage;
