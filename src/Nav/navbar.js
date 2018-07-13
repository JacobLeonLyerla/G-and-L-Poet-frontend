import React from "react";
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
 
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from "reactstrap";

export default class NavBar extends React.Component {
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
      <Link to='/' style={{textDecoration:"none"}}>
    <div to='/' className="nav-styles">
      <i class="fas fa-book-open" />
Poetié
        {/* <Navbar expand="md">
          <NavbarBrand href="/">
            <i class="fas fa-book-open" />
          </NavbarBrand>
      
            <i class="far fa-caret-square-down"onClick={this.toggle} />
        
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink >login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  create
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </div>
      </Link>
    );
  }
}
