import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { forgotPass } from "../../services/userservice"
// import "./forgot.scss";



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

class forgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email: "",
        };
      }


      change = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      handleEmailInput = (event) => {
        event.preventDefault();
        this.setState({
          email: event.target.value,
        });
    }

      
      handleSubmit =(event) =>{
        event.preventDefault();

         let forgotPassData = {
          email: this.state.email,
          service: "advance"
        }
        console.log(forgotPassData)
        forgotPass(forgotPassData).then((data)=>{
          console.log(data);
        })
        .catch ((error)=>{
          console.log(error)
        })      
      }

render(){
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
           <div classname="heading">
             <h3 classname="account">Account recovery</h3>
             <p className="para">Enter the last password you remember using with this Google Account</p>
           </div>
           <br></br>
           <br></br>
           <form className={classes.form} noValidate>
             <TextField
               variant="outlined"

               required
               fullWidth
               id="email"
               label="Email Address Or Phone"
               name="email"
               autoFocus
               onChange={(e) => this.change(e)}
               value={this.state.email}
               />
   
             <Grid container spacing={12}>
               <Grid item item xs={12} sm={6} className="create">
               </Grid>
               <Grid item item xs={12} sm={6} classname="submit">
                 <Button
                   onClick={this.handleSubmit}
                   type="submit"
                   variant="contained"
                   color="primary"
                   className={classes.submit}
                 >
                   Next
                 </Button>
               </Grid>
             </Grid>
           </form>
         </div>
       </Container>
       )
     }
    }
   export default withStyles(useStyles)(forgotPassword);