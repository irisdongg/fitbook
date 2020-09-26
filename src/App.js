import React, {Component} from 'react';
import './App.css';
<<<<<<< HEAD

import {Button, Form, FormGroup, Label, Input}
  from 'reactstrap';

import {FacebookLoginButton} from 'react-social-login-buttons';
import {GoogleLoginButton} from 'react-social-login-buttons';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">fitbook</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
          Log in
        </Button>
        <div className="text-center pt-3">
          Or continue with another account
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <GoogleLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    );
  }
=======
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
>>>>>>> 25ee8a2ccbb9e29b8cf15bcd724ab9c1e43da92e
}

export default App;
