import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import Image1 from './../support/img/logo.png'
import {Link} from 'react-router-dom'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          <Navbar color="light" light expand="md">
          <Link to="/">
            <img src={Image1} alt="logo" width="20%"/>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about/" style={{marginRight:"40px"}}>About Me</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">Contact</Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      
      </div>
    );
  }
}