import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { login } from "../../services/userservice"
import "./login.scss";
const useStyles = theme => ({
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
class Login extends Component {

    constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
        email: '',
        password: '',
    }
  }

    change=(e)=> {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit =(event) => {
    event.preventDefault();
    let loginData = {
        
      email: this.state.email,
      password: this.state.password,
      
    };

    console.log(loginData)

    login (loginData).then((data)=>{
      console.log(data);
      localStorage.setItem('token',data.data.id);
    })
    .catch ((error)=>{
      console.log(error)
    })
   
  }

  render (){
    console.log(this.props)
     const { classes } = this.props;
  
    return(
      
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
          <h3>Sign in</h3>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address Or Phone"
            name="email"
            autoFocus
            onChange={(e) => this.change(e)}
            value={this.state.email}
            />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => this.change(e)}
            value={this.state.password}
          />
          <div class="forgot-password">
            <Link href="#" variant="body2"  >
              Forgot password?
            </Link>
          </div>

          <Grid container spacing={12}>
            <Grid item item xs={12} sm={6} className="create">
              <Link href="#" variant="body2">
                {"create Account"}
              </Link>
            </Grid>
            <Grid item item xs={12} sm={6} classname="submit">
              <Button
                onClick={this.onSubmit}
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    )
  }
}

export default withStyles(useStyles)(Login);