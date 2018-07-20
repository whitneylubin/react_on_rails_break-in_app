import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Navbar, NavbarBrand, Fa, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container, FormInline } from 'mdbreact';
import Test from './Test.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }

  render(){
  const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    return (
      <div id="Nav">
       <Router>
          <div>
            <Navbar dark expand="md" fixed="top" scrolling>
              <Container>
                <NavbarBrand>
                  <span className="white-text">Break-In App</span>
                </NavbarBrand>
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = {this.state.collapse} navbar>
                  <NavbarNav left>
                    <NavItem>
                      <NavLink to="#!">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <Link to="/map/googlemap">Live Map</Link>
                      <Route path="/map/googlemap" component={Test} />
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Account</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Scoreboard</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="#!">Contact</NavLink>
                    </NavItem>
                  </NavbarNav>
                  <NavbarNav right >
                    <NavItem>
                      <NavLink to="!#">
                        <Fa icon="facebook"></Fa>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="!#">
                        <Fa icon="twitter"></Fa>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="!#">
                        <Fa icon="instagram"></Fa>
                      </NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Container>
            </Navbar>
          { this.state.collapse && overlay}
          </div>
        </Router>
          </div>
    );
  }
};

export default Nav;