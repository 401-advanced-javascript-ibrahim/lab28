import React from 'react';
import {NavLink,Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>RESTy</h1>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/history">History</Link>
        </h2>
      </header>
    );
  }
}

export default Header;