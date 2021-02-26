import React from "react";
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from './components/login/login';
import Register from "./components/register/register";
import reset from './components/resetpassword/reset';
import forgot from '../src/components/forgotpassword/forgot';
import navbar from '../src/components/navbar/navbar'
import Sidebar from "./components/SideBar/sidebar";
import Notes from "./components/notes/notes"
import AddNote from "./components/addNote/addnote";
import DisplayIcons from "./components/displayicons/displayicons";
import DisplayNote from "./components/displaynotes./displaynotes";
function App() {
  return (
    <div className="App">
     <Router>
    
            <Switch>
            <Route  path="/login" component={Login}/> 
            <Route  path="/register" component={Register}/> 
            <Route path="/resetPassword/:id" component={reset}/>
            <Route path="/forgot" component={forgot}/>
            <Route path="/navbar" component={navbar}/>
            <Route path="/sidebar" component={Sidebar}/>
            <Route path="/notes" component={Notes}/>
            <Route path="/takenote" component={AddNote}/>
            <Route path="/icons" component={DisplayIcons}/>
            <Route path="/displaynotes" component={DisplayNote}/>
            </Switch>
    
     </Router>
    </div>
  );
}

export default App;
