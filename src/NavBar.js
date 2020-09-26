import React from 'react';
import {Link} from "react-router-dom"
import "./NavBar.css";
import "./App.css";

function NavBar(props) {
    return (
        <div class="topnav">
            <a href="/login">Login</a>
            <Link to="/requestfeed">Fit Me Up</Link>
            <a href="/postworkout">Post Workout</a>
            <div class="dropdown">
                <button class="dropbtn">Profile
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="/calendar">Calendar</a>
                    <a href="/profile">Profile</a>
                    <a href="/settings">Settings</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;