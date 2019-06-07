import React, {Component} from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';

class AppNavbar extends Component {
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
      <div className="AppNavbar">
        <Navbar color="primary" primary expand="md">
          <NavbarBrand href="/" style={{color: 'white'}}>Todo List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
