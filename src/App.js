import React from "react";
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from './components/login/login';
import Register from "./components/register/register";
import reset from './components/resetpassword/reset';
import forgot from '../src/components/forgotpassword/forgot';
function App() {
  return (
    <div className="App">
     <Router>
    
            <Switch>
            <Route  path="/login" component={Login}/> 
            <Route  path="/register" component={Register}/> 
            <Route path="/resetPassword/:id" component={reset}/>
            <Route path="/forgot" component={forgot}/>
            
            </Switch>
    
     </Router>
    </div>
  );
}

export default App;
