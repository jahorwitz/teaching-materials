import React, {Component} from 'react';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route
  // etc.
} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Stopwatch from './Stopwatch';

class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <NavBar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Menu" path="/menu" component={Menu}/>
          <Route name="About" path="/about" component={About} />
          <Route name="Stopwatch" path="/stopwatch" component={Stopwatch} />
        </div>
      </Router>
    );
  }
}

export default Routes;