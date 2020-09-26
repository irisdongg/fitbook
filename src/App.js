import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a href="#Requestfeed">Fit Me Up</a>
        <a href="#postworkout">Post Workout</a>
        <div class="dropdown">
          <button class="dropbtn">Profile
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#calendar">Calendar</a>
            <a href="#">Profile</a>
            <a href="#">Preferences</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
