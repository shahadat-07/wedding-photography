import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="d-flex justify-content-center heroNav">
        <nav className="navbar navbar-expand-lg navbar-light p-5 align-items-center">
            <Link to="/home">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active text-white">
                        <Link className="nav-link" to="/orders">Orders</Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
};

export default NavBar;