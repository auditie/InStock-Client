import './AddWarehouse.scss';
import React from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { API_URL } from '../../App';
// import { Link } from 'react-router-dom';

class AddWarehouse extends React.Component {
    state = {
        name: "",
        address: "",
        city: "",
        country: "",
        contactName: "",
        contactPosition: "",
        contactPhone: "",
        contactEmail: "",
    };

    addWarehouse = (event) => {
        event.preventDefault();
        console.log(event);

        axios
            .post(`${API_URL}/warehouses/add`, {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                country: this.state.country,
                contact: {
                    name: this.state.contactName,
                    position: this.state.contactPosition,
                    phone: this.state.contactPhone,
                    email: this.state.contactEmail,
                }
            })
            //afterposting, this will make it go back to the homepage
            .then((response) => {
                this.props.history.push('/');
            })
    };

    handleChangeWarehouse = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="add-warehouse" >
                <div className="add-warehouse__title" >
                    <img className="add-warehouse__arrow" src={BackArrow} alt="arrow-back"></img>
                    <h1>Add New Warehouse</h1>
                </div>
                <form onSubmit={this.addWarehouse}>
                    <div className="add-warehouse__form" >
                        <div className="add-warehouse__warehouse--detail" >
                            <h2 className="add-warehouse__subtitle" >Warehouse Details</h2>
                            <h3 className="add-warehouse__labels" >Warehouse Name</h3>
                            <textarea type="text" placeholder="Warehouse Name" value={this.state.name} onChange={this.handleChangeWarehouse} name="name" required></textarea>
                            <h3 className="add-warehouse__labels" >Street Address</h3>
                            <textarea type="text" placeholder="Street Address" value={this.state.address} onChange={this.handleChangeWarehouse} name="address" required></textarea>
                            <h3 className="add-warehouse__labels" >City</h3>
                            <textarea type="text" placeholder="City" value={this.state.city} onChange={this.handleChangeWarehouse} name="city" required></textarea>
                            <h3 className="add-warehouse__labels" >Country</h3>
                            <textarea type="text" placeholder="Country" value={this.state.country} onChange={this.handleChangeWarehouse} name="country" required></textarea>
                        </div>
                        <div className="add-warehouse__contact--detail" >
                            <h2 className="add-warehouse__subtitle" >Contact Details</h2>
                            <h3 className="add-warehouse__labels" >Contact Name</h3>
                            <textarea type="text" placeholder="Contact Name" value={this.state.contactName} onChange={this.handleChangeWarehouse} name="contactName" required></textarea>
                            <h3 className="add-warehouse__labels" >Position</h3>
                            <textarea type="text" placeholder="Position" value={this.state.contactPosition} onChange={this.handleChangeWarehouse} name="contactPosition" required></textarea>
                            <h3 className="add-warehouse__labels" >Phone Number</h3>
                            <textarea type="text" placeholder="Phone Number" value={this.state.contactPhone} onChange={this.handleChangeWarehouse} name="contactPhone" required></textarea>
                            <h3 className="add-warehouse__labels" >Email</h3>
                            <textarea type="text" placeholder="Email" value={this.state.contactEmail} onChange={this.handleChangeWarehouse} name="contactEmail" required></textarea>
                        </div>
                    </div>
                    <div className="add-warehouse__submit" >
                        {/* <Link className="add-warehouse__submit--cancel" to="/">Cancel</Link> */}
                        <button className="add-warehouse__submit--cancel">Cancel</button>
                        <button className="add-warehouse__submit--add" type="submit">+ Add Warehouse</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddWarehouse;