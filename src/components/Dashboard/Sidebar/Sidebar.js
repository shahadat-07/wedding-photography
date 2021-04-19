import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <ul className="sidebar mt-5">
                <Link to="orderList"><li>Order List</li></Link>
                <Link to="addService"><li>Add Service</li></Link>
                <Link to="addReview"><li>Add Review</li></Link>
                <Link to="makeAdmin"><li>Make Admin</li></Link>
                <Link to="manageService"><li>Manage Services</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;