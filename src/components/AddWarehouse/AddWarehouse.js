import './AddWarehouse.scss';
import React from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
// import { DropdownList }  from 'react-router-dom';
// import axios from 'axios';

class AddWarehouse extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="add-warehouse" >
                <div className="add-warehouse__title" >
                    <img src={BackArrow} alt="arrow-back"></img>
                    <h1>Add New Warehouse</h1>
                </div>
                <form>
                    <div className="add-warehouse__warehouse--detail" >
                        <h2 className="add-warehouse__subtitle" >Warehouse Details</h2>
                        <h3 className="add-warehouse__labels" >Warehouse Name</h3>
                        <textarea type="text" placeholder="Warehouse Name" ></textarea>
                        <h3 className="add-warehouse__labels" >Street Address</h3>
                        <textarea type="text" placeholder="Street Address" ></textarea>
                        <h3 className="add-warehouse__labels" >City</h3>
                        <textarea type="text" placeholder="City" ></textarea>
                        <h3 className="add-warehouse__labels" >Country</h3>
                        <textarea type="text" placeholder="Country" ></textarea>
                    </div>
                    <div className="add-warehouse__contact--detail" >
                        <h2>Contact Details</h2>
                        <h3 className="add-warehouse__labels" >Contact Name</h3>
                        <textarea type="text" placeholder="Contact Name" ></textarea>
                        <h3 className="add-warehouse__labels" >Position</h3>
                        <textarea type="text" placeholder="Position" ></textarea>
                        <h3 className="add-warehouse__labels" >Phone Number</h3>
                        <textarea type="text" placeholder="Phone Number" ></textarea>
                        <h3 className="add-warehouse__labels" >Email</h3>
                        <textarea type="text" placeholder="Email" ></textarea>
                    </div>
                    <div className="add-warehouse__submit" >
                        {/* <Link to="/">Cancel</Link> */}
                        <button className="add-warehouse__submit--cancel">Cancel</button>
                        <button className="add-warehouse__submit--add" type="submit">+ Add Warehouse</button>

                    </div>

                </form>
            </div>

        )
    }

}

export default AddWarehouse;