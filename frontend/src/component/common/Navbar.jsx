import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';

function Navbar() {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const isStaff = ApiService.isStaff();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <img src="./assets/images/logo3.png" height="50px" alt="Logo" className="logo" />
               
            </div>
            <ul className="navbar-ul">
                {/* GUEST */}
                <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/gallery" activeclassname="active">Gallery</NavLink></li>
                <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
                <li><NavLink to="/fooditems" activeclassname="active">Food Items</NavLink></li>

                {/* <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li> */}
                {isStaff && <li><NavLink to="/query" activeclassname="active">Queries</NavLink></li>}
                {isStaff && <li><NavLink to="/deliverylist" activeclassname="active">Delivery</NavLink></li>}
                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout} >Logout</li>}
            </ul>
        </nav>
    );
}

export default Navbar;
