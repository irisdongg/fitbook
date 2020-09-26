import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login.js";
import NavBar from "./NavBar.js";
import Requestfeed from "./Requestfeed.js";
import Postworkout from "./Postworkout.js";
import Calendar from "./Calendar.js";
import Settings from "./Settings.js";
import Profile from "./Profile.js";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (

    <div className="App">   
      <Router>
        <NavBar/>
        <Route path="/login"  component={Login}/>
        <Route path="/requestfeed"  component={Requestfeed}/>
        <Route path="/postworkout" component={Postworkout} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/settings" component={Settings} />
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;
