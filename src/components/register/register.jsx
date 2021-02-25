import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import './register.scss';
import registration from "../../services/userservice";
import AccImg from "../assests/account.svg";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Rpassword: "",
    };
  }
render() {
    return (    
<div className="registration">
<div elevation={0} className="signupPage">
  <div className="header">
    <span className="inlineTitle">
      <b>
        <font color="#1976d2">F</font>
        <font color="#e53935">u</font>
        <font color="#ffb74d">n</font>
        <font color="#1976d2">d</font>
        <font color="#388e3c">o</font>
        <font color="#e53935">o</font>
      </b>
    </span>
    <div className="headerText">Create your Fundoo Account </div>
  </div>
  <div className="container">
    <form className="form">
      <div className="inputs">
        <div className="inputField">
          <TextField
            autoCapitalize="off"
            name="firstName"
           
            size="small"
            label="First Name"
            variant="outlined"
            fullWidth
            
          />
        </div>
        <div className="inputField">
          <TextField
            size="small"
            name="lastName"
            label="Last Name"
            variant="outlined"
           
            fullWidth
            
          />
        </div>
      </div>
      <div className="inputs">
        <div className="inputField">
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            className="emailField"
            name="email"
  
            label="email"
     
          />
        </div>
      </div>
      <div className="inputs">
        <div className="inputField">
          <TextField
            size="small"
            id="password"
            label="Password"
            name="password"
           
            fullWidth
          
           
            variant="outlined"
          />
        </div>
        <div className="inputField">
          <TextField
            size="small"
            id="password"
            label="Confirm"
            name="conformPassword"
            fullWidth 
            variant="outlined"
         
          />
        </div>
      </div>
      <span className="checkBoxInputs">
        <Checkbox
    
          color="primary"
          className="showPass"
        />
        Show Password
      </span>
      <div className="footerButtons">
        <div className="signInLink">
          <Button
            color="primary"
            
            Next>
          </Button>
        </div>
        <div className="nextButton">
        <Link href="#" variant="body2">
        {"create Account"}
         </Link>
        </div>
      </div>
    </form>
    <div className="regImg">
    <img src={AccImg} alt="" />
      <p className="ImgText">
        {" "}
        One account. All of Fundoo working for you.
      </p>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
export default Register;
