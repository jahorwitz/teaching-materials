import React, {Component} from 'react';
import '../css/Menu.css';

class Menu extends Component {
    render(){
      return(
        <div>
          <h1>Menu</h1>
          <p>Check out our amazing 24/7 menu:
            <ul>
              <li>Lazy Loading</li>
              <li>Dynamic Route Matching</li>
              <li>Location Transition Handling</li>
            </ul>
          </p>
        </div>
      );
    }
  }

export default Menu;