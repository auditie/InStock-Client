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

  render() {
    return (
      // <Switch> 
      //     <Route path='/' component={WarehouseList}/>
      //     <Route 
      //         path='/warehouses/:selectedWarehouse' 
      //         render={(routerProps) => (
      //             <WarehouseDetails warehouse={this.state.selectedWarehouse} contact={this.state.selectedWarehouse.contact} {...routerProps}/>
      //         )}/>
      // </Switch>
      <WarehouseDetails warehouse={this.state.selectedWarehouse} contact={this.state.selectedWarehouse.contact}/>
    )
  }

}

export default HomePage;
