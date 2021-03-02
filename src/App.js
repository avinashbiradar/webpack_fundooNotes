import React from "react";
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Login from './components/login/login';
import Register from "./components/register/register";
import reset from './components/resetpassword/reset';
import forgot from '../src/components/forgotpassword/forgot';
import Navbar from '../src/components/navbar/navbar'
import Sidebar from "./components/SideBar/sidebar";
import Notes from "./components/notes/notes"
import AddNote from "./components/addNote/addnote";
import DisplayIcons from "./components/displayicons/displayicons";
import DisplayNote from "./components/displaynotes/displaynotes";
import TrashNote from "./components/trashnotes/trashnote"
import Archive from "./components/archivenotes/archive"
function App() {
  return (
    <div className="App">
     <Router>
    
           
            <Route  path="/login" component={Login}/> 
            <Route  path="/register" component={Register}/> 
            <Route path="/resetPassword/:id" component={reset}/>
            <Route path="/forgot" component={forgot}/>
            <Route path="/home" component={Navbar}/>
            <Route path="/home/notes" component={Notes}/>
            <Route path="/home/trash" component={TrashNote}/>
            <Route path="/archive" component={Archive} />
            
    
     </Router>
    </div>
  );
}

export default App;
