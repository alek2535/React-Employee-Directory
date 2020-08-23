import React from "react";
import {
    Navbar,
    Nav,
    Button,
    Form,
    FormControl
} from "react-bootstrap";

function NavSearch(props) {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Employee-Search</Navbar.Brand>
            <Nav className="mr-auto">
            <Button variant="outline-light">Filter By First Name</Button>
            <Button variant="outline-light">Filter by Last Name</Button>
            <Button variant="outline-light">Sort by Location</Button>
            </Nav>
            <Form inline>
            <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
        <br />
    </>
  );
}

export default NavSearch;