import React from 'react';
import "./Login.css";

import {Button, Form, FormGroup, Label, Input}
  from 'reactstrap';

import {FacebookLoginButton} from 'react-social-login-buttons';
import {GoogleLoginButton} from 'react-social-login-buttons';

function Login(props) {
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
    )
}

export default Login
