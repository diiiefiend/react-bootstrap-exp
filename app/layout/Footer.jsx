import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

module.exports = React.createClass({
  render(){
    return (
      <Navbar className="navbar-fixed-bottom">
        <Nav>
          <p className="navbar-text">Footer stuff</p>
        </Nav>
      </Navbar>
    )
  }
});
