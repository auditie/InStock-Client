import './HomePage.scss';
import axios from 'axios';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';

class HomePage extends Component {
  state = {
    warehouses: [],
    selectedWarehouse: {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      name: "Manhattan",
      address: "503 Broadway",
      city: "New York",
      country: "USA",
      contact: {
        name: "Parmin Aujla",
        position: "Warehouse Manager",
        phone: "+1 (646) 123-1234",
        email: "paujla@instock.com"
      }
    },
    warehouseInventory: [
      {
        id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Television",
        description: "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
        category: "Electronics",
        status: "In Stock",
        quantity: 500
      },
      {
        "id": "83433026-ca32-4c6d-bd86-a39ee8b7303e",
        "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
        "warehouseName": "Manhattan",
        "itemName": "Gym Bag",
        "description": "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
        "category": "Gear",
        "status": "Out of Stock",
        "quantity": 0
      }
    ]
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

  handleClick = () => {
    const warehouseId = this.props.match.params.warehouseId
    this.getVideo(warehouseId)
    axios.get(`http://localhost:8080/warehouses/${warehouseId}/inventory`)
    .then((response) => {
      this.setState({
        warehouseInventory: response.data
      })
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/warehouses`)
    .then((response => {
      this.setState({
        warehouses: response.data
      })
    }))
  }

  render() {
    return (

              <WarehouseDetails warehouse={this.state.selectedWarehouse} contact={this.state.selectedWarehouse.contact} inventory={this.state.warehouseInventory}/>
    )
  }

}

export default HomePage;
