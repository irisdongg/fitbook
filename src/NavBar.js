import React from 'react';
import {Link} from "react-router-dom"
import iris from './IMG_9922.JPG'
import "./NavBar.css";
import "./App.css";

function NavBar(props) {
    return (
        <div class="topnav">
            
            <div class="dropdown">
                <button class="dropbtn" style={{padding: 4 + 'px'}}>
                    <img src={iris} style={{padding: 0 + 'em'}} width="40" height="45" alt="Profile"/>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="/calendar">Calendar</a>
                    <a href="/profile">Profile</a>
                    <a href="/settings">Settings</a>
                    <a href="/login">Login</a>
                </div>
            </div>
            
            <a href="/postworkout">Post Workout</a>
            <Link to="/requestfeed">Fit Me Up</Link>
            
        </div>
    );
}

export default NavBar;