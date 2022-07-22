import './InventoryPage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails';
import InventoryList from '../../components/InventoryList/InventoryList';
//import axios from 'axios';

class InventoryPage extends Component {
  state = {
    allInventory: [],
    singleInventoryItem: {}  
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
  

  componentDidMount() {
    axios.get(`http://localhost:8080/inventory`)
    .then((response => {
      this.setState({
        warehouses: response.data
      })
    }))
  }

  render() {
          {/*<Switch> 
          <Route 
              path='/' exact
              render={(routerProps) => (
                  <WarehouseList handleClick={this.handleClick} id={this.state.selectedWarehouse.id} {...routerProps}/>
              )}/>
          <Route 
              path='/warehouses/:warehouseId' 
              render={(routerProps) => (
                  <WarehouseDetails warehouse={this.state.selectedWarehouse} contact={this.state.selectedWarehouse.contact} inventory={this.state.warehouseInventory} {...routerProps}/>
              )}/>
              </Switch>*/}
    return (
      <div>
      <InventoryItemDetails inventory={this.state.singleInventoryItem}/>
      </div>
    )
  }

}

export default InventoryPage;
