import React from "react";
import "./navbar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){
    return(
        <>
            <div className="navbarContainer">
                <div className="max left">
                </div>

                <div className="max middle">
                    <ul className="mainNav">
                        <li>Home</li>
                        <li><a href="#order">Order</a></li>
                        <li>Food</li>
                        <li>Restaurant</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="max right">
                    <ul>
                        <li><CallIcon className="icon" /></li>
                        <li><ShoppingCartIcon /></li>
                    </ul>
                </div>

                <div className="min">
                    <ul>
                        <li><MenuIcon /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}