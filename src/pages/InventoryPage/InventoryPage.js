import './InventoryPage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails';

class InventoryPage extends Component {
  state = {
    allInventory: [],
    singleInventoryItem: {
        "id": "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
        "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
        "warehouseName": "Manhattan",
        "itemName": "Television",
        "description": "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
        "category": "Electronics",
        "status": "In Stock",
        "quantity": 500
      }  
};

  // set up axios
  getWarehouse = (id) => {
    axios.get(`http://localhost:8080/warehouses/${id}`)
      .then((response) => {
        this.setState({
          selectedWarehouse: response.data
        })
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
