import './AddInventory.scss';
import React from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { API_URL } from '../../App';
import { Link } from 'react-router-dom';

class AddInventory extends React.Component {
    state = {
        itemName: "",
        description: "",
        category: "",
        status: "",
        quantity: null,
        warehouseName: ""
    }

    addInventory = (event) => {
        event.preventDefault();
        console.log(event);

        axios
            .post(`${API_URL}/inventory/add`, {
                itemName: this.state.itemName,
                description: this.state.description,
                category: this.state.category,
                status: this.state.status,
                quantity: this.state.quantity,
                warehouseName: this.state.warehouseName,
            })
            .then((response) => {
                this.props.history.push('/');
            })
    };

    handleChangeInventory = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //can i remove required?
    //would it be this.state.warehouseID?? or the name...look at the inventories.json


    render() {
        return (
            <div className="add-inventory" >
                <div className="add-inventory__title" >
                    <img className="add-inventory__arrow" src={BackArrow} alt="arrow-back"></img>
                    <h1>Add New Inventory</h1>
                </div>
                <form onSubmit={this.addInventory}>
                    <div className="add-inventory__form" >
                        <div className="add-inventory__inventory--detail" >
                            <h2 className="add-inventory__subtitle" >Item Details</h2>
                            <h3 className="add-inventory__labels" >Item Name</h3>
                            <textarea type="text" placeholder="Item Name" value={this.state.itemName} onChange={this.handleChangeInventory} name="itemName" ></textarea>
                            <h3 className="add-inventory__labels" >Description</h3>
                            <textarea className="add-inventory__labels--description" type="text" placeholder="Please enter a brief item description..." value={this.state.description} onChange={this.handleChangeInventory} name="description" ></textarea>
                            <h3 className="add-inventory__labels" >Category</h3>
                            <select className="add-inventory__dropdown">
                                <option value="">Please Select</option>
                                <option value={this.state.category} name="category" onChange={this.handleChangeInventory}>Accessories</option>
                                <option value={this.state.category} name="category" onChange={this.handleChangeInventory}>Apparel</option>
                                <option value={this.state.category} name="category" onChange={this.handleChangeInventory}>Electronics</option>
                                <option value={this.state.category} name="category" onChange={this.handleChangeInventory}>Health</option>
                                <option value={this.state.category} name="category" onChange={this.handleChangeInventory}>Gear</option>
                                {/* <option name="category" value={this.state.category} onChange={this.handleChangeInventory}></option>
                                required */}
                            </select>
                        </div>
                        <div className="add-inventory__availability--detail" >
                            <h2 className="add-inventory__subtitle" >Contact Details</h2>
                            <h3 className="add-inventory__labels" >Status</h3>
                            <div className="add-inventory__radio-buttons" >
                                <div className="add-inventory__radio-buttons--in" >
                                    <input type="radio" name="status" value={this.state.status} onChange={this.handleChangeWarehouse}></input>
                                    <label for="in">In stock</label>
                                </div>
                                <div>
                                    <input type="radio" name="status" value={this.state.status} onChange={this.handleChangeWarehouse}></input>
                                    <label for="out">Out of stock</label>
                                </div>
                            </div>
                            <h3 className="add-inventory__labels" >Quantity</h3>
                            <textarea type="text" name="quantity" placeholder="0" value={this.state.quantity} onChange={this.handleChangeWarehouse}  ></textarea>
                            <h3 className="add-inventory__labels" >Warehouse</h3>
                            <select className="add-inventory__dropdown">
                                <option value="">Please Select</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>Jersey</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>Manhattan</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>Miami</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>San Fran</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>Santa Monica</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>Seattle</option>
                                <option value={this.state.warehouseName} name="warehouseName" onChange={this.handleChangeInventory}>Washington</option>

                                {/* <option name="warehouseName" value={this.state.warehouseName} onChange={this.handleChangeInventory}></option>
                                required */}
                            </select>
                        </div>
                    </div>
                    <div className="add-inventory__submit" >
                        <Link className="add-inventory__submit--cancel" to="/">Cancel</Link>
                        <button className="add-inventory__submit--add" type="submit">+ Add Inventory</button>
                    </div>
                </form >
            </div >
        )
    }
}

export default AddInventory;