import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

module.exports = React.createClass({
  render(){
    return(
      <Navbar className="navbar-inverse">
        <Navbar.Header>
          <Navbar.Brand>
            Nav:
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Link1</NavItem>
          <NavItem href="#">Link2</NavItem>
          <NavItem href="#">Link3</NavItem>
          <NavItem href="#">Link4</NavItem>
        </Nav>
      </Navbar>
    )
  }
});
