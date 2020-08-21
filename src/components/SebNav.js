import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function SebNav(props) {
    const navItems = props.items.map((item) =>  NavItem(item));

    return(
      <Navbar variant="dark" collapseOnSelect  expand="lg" bg="secondary" textUppercase fixedTop className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <Navbar.Brand href="#page-top">Sebastian Simmons' Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                  {navItems}
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    );
}

function NavItem(props){
  return(
    <Nav.Link><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href={props.link}>{props.text}</a></li></Nav.Link>
  );

}
