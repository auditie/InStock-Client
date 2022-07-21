import './EditWarehouse.scss';
import React from 'react';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
// import { DropdownList }  from 'react-router-dom';
// import axios from 'axios';

class AddWarehouse extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="edit-warehouse" >
                <div className="edit-warehouse__title" >
                    <img className="edit-warehouse__arrow" src={BackArrow} alt="arrow-back"></img>
                    <h1>Edit Warehouse</h1>
                </div>
                <form>
                    <div className="edit-warehouse__form" >
                        <div className="edit-warehouse__warehouse--detail" >
                            <h2 className="edit-warehouse__subtitle" >Warehouse Details</h2>
                            <h3 className="edit-warehouse__labels" >Warehouse Name</h3>
                            <textarea type="text" placeholder="Warehouse Name" ></textarea>
                            <h3 className="edit-warehouse__labels" >Street Address</h3>
                            <textarea type="text" placeholder="Street Address" ></textarea>
                            <h3 className="edit-warehouse__labels" >City</h3>
                            <textarea type="text" placeholder="City" ></textarea>
                            <h3 className="edit-warehouse__labels" >Country</h3>
                            <textarea type="text" placeholder="Country" ></textarea>
                        </div>
                        <div className="edit-warehouse__contact--detail" >
                            <h2 className="edit-warehouse__subtitle" >Contact Details</h2>
                            <h3 className="edit-warehouse__labels" >Contact Name</h3>
                            <textarea type="text" placeholder="Contact Name" ></textarea>
                            <h3 className="edit-warehouse__labels" >Position</h3>
                            <textarea type="text" placeholder="Position" ></textarea>
                            <h3 className="edit-warehouse__labels" >Phone Number</h3>
                            <textarea type="text" placeholder="Phone Number" ></textarea>
                            <h3 className="edit-warehouse__labels" >Email</h3>
                            <textarea type="text" placeholder="Email" ></textarea>
                        </div>

                    </div>

                    <div className="edit-warehouse__submit" >
                        {/* <Link to="/">Cancel</Link> */}
                        <button className="edit-warehouse__submit--cancel">Cancel</button>
                        <button className="edit-warehouse__submit--save" type="submit">Save</button>
                    </div>
                </form>
            </div>

        )
    }

}

export default AddWarehouse;
