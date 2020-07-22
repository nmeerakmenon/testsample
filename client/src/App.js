import React, {Component} from 'react';

import './App.css';
import Post from './components/post';

import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    
  }

  
  

  

  render() {
    return (
      <div className="App">
        <Router>
          
          <Switch>
            <Route
              exact
              path = "/"
              render = {() => (<Post/>)}
            />
           
           
            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
