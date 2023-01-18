import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarMain = () => {
  return (
    <div className='navbar'>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '500px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>



              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  All Projects
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Add Project
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">

                  Search a Project

                </NavDropdown.Item>
              </NavDropdown>



              <NavDropdown title="Bonds" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  All Bonds
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Add Bond
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item> */}
              </NavDropdown>
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
              
              <Button variant="outline-success">Ask a Question</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default NavbarMain