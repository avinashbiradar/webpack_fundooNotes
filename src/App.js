import React from "react";
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from './components/login/login';
import Register from "./components/register/register";
function App() {
  return (
    <div className="App">
     <Router>
    
            <Switch>
            <Route exact path="/login" component={Login}/> 
            <Route exact path="/register" component={Register}/> 
            </Switch>
    
     </Router>
    </div>
  );
}

export default App;
