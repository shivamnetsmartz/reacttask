import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataFetch from './DataFetch';
import UserDetails from './userDetails';

function App() {
  return (
    
    <div className="App">
    <Router>
    
    <Switch>
      <Route exact path="/" component={DataFetch} />
      <Route exact path="/userDetails/:id" component={UserDetails} />
      </Switch>
                         
  
    </Router>
    </div>
    
  );
}

export default App;
