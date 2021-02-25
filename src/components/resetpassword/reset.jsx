import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./reset.scss";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { resetPass } from "../../services/userservice"

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
class reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      password2: "",
    };
  }
  handlePassword1Input = (event) => {
    event.preventDefault();
    this.setState({
      hidePassword: true,
      newPassword: event.target.value,
    });
  };
  handlePassword2Input = (event) => {
    event.preventDefault();
    this.setState({
      hidePassword: true,
      password2: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newPassword === "" && this.state.password2 === "") {
      this.setState({
        newPassword: this.state.newPassword,
        
        errorValid: {
          newPassword: true,
          password2: true,
        },
        errors: {
          newPassword: "Password field should not be empty",
          password2: "Confirm password field should not be empty",
        },
      });
     
    }
    let resetPassData = {
      newPassword: this.state.newPassword,
    }
    resetPass(resetPassData,this.props.match.params.id).then((data)=>{
      console.log(data);
    })
    .catch ((error)=>{
      console.log(error)
    })      
  }

  render() {
    const { classes } = this.props;
    return (
      <Container classname="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography className="app_name" variant="h5" color="textSecondary">
            <span style={{ color: "#0606f8" }}>F</span>
            <span style={{ color: "#d10303" }}>u</span>
            <span style={{ color: "#f0b000" }}>n</span>
            <span style={{ color: "#0606f8" }}>d</span>
            <span style={{ color: "green" }}>o</span>
            <span style={{ color: "#d10303" }}>o</span>
          </Typography>
          <div>
            <h3>Reset Password</h3>
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="old-password"
              label="New Password"
              name="email"
              value={this.state.newPassword}
              onChange={this.handlePassword1Input}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confim Password"
              type="password"
              id="new-password"
              value={this.state.password2}
              onChange={this.handlePassword2Input}
            />

            <Grid container spacing={12}>
              <Grid item item xs={6} sm={6} classname="submit">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(reset);
