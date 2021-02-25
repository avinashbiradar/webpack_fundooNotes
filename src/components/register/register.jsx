import React, { Component } from "react"
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import './register.scss';
import registration from "../../services/userservice";
import AccImg from "../assests/account.svg";
import Snackbar from "@material-ui/core/Snackbar";
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

  handleFirstNameInput = (event) => {
    event.preventDefault();
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLastNameInput = (event) => {
    event.preventDefault();
    this.setState({
      lastName: event.target.value,
    });
  };
  handleEmailInput = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  };
  handleReapetPasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      Rpassword: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("working handle submit");
    let userData = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      service: "advance",
    };
    console.log(userData);
    registration(userData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            value={this.state.firstName}
            size="small"
            label="First Name"
            variant="outlined"
            fullWidth
            onChange={this.handleFirstNameInput}
          />
        </div>
        <div className="inputField">
          <TextField
            size="small"
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={this.state.lastName}
            fullWidth
            onChange={this.handleLastNameInput}
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
            value={this.state.email}
            label="email"
            onChange={this.handleEmailInput}
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
            value={this.state.password}
            fullWidth
            onChange={this.handlePasswordInput}
           
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
            onChange={this.handleReapetPasswordInput}
          />
        </div>
      </div>
      <span className="checkBoxInputs">
        <Checkbox
          onClick={this.clickShowPass}
          color="primary"
          className="showPass"
        />
        Show Password
      </span>
      <div className="footerButtons">
        <div className="signInLink">
          <Button
            color="primary"
            onClick={this.handleSubmit}>
            Next
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
<div>
<Snackbar open={this.state.open} >
 
</Snackbar>
</div>
</div>
);
}
}
export default Register;
