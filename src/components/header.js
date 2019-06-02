import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
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
            <img src="https://static1.squarespace.com/static/57229aa27da24fd5709d7a9b/t/59cc714503596e87f56e5471/1554152159328/?format=1500w" alt="logo" width="20%"/>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about/" style={{textDecoration:"none",marginRight:"40px"}}>About</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact"style={{textDecoration:"none"}}>Contact</Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      
      </div>
    );
  }
}