import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from "../icons/fab/navbar/home2.png";
import TodoIcon from "../icons/fab/navbar/list-check.png";
import BalanceIcon from "../icons/fab/navbar/check-mark.png";
import ProfileIcon from "../icons/fab/navbar/user.png";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <span className="navOption">
                {/* <img src={HomeIcon}></img> */}
                <Link className="link" to="/"><h2>Home</h2></Link>
            </span>
            <span className="navOption">
                {/* <img src={TodoIcon}></img> */}
                <Link className="link" to="/todo"><h2>To-Do List</h2></Link>
            </span>
            <span className="navOption">
                {/* <img src={ProfileIcon}></img> */}
                <Link className="link" to="/profile"><h2>Profile</h2></Link>
            </span>
        </div>
    )
};

export default Navbar;