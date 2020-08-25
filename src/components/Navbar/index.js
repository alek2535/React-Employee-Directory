import React from "react";
import {
    Navbar,
    Nav,
    Button,
    Form,
    FormControl
} from "react-bootstrap";

function NavSearch(props) {
  const {
    search,
    handleSearchEmployee
  } = props;
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Employee-Search</Navbar.Brand>
            <Nav className="mr-auto">
            <Button variant="info">Filter By First Name</Button>
            <Button variant="warning">Filter by Last Name</Button>
            <Button variant="info">Sort by Location</Button>
            </Nav>
            <Form inline>
            <FormControl
              value={search} 
              name="search"
              type="text" 
              placeholder="Search for Employee" 
              className="mr-sm-2"
              onChange={handleSearchEmployee}
             />
            <Button
              onChange={handleSearchEmployee}
              variant="warning"
            >Search</Button>
            </Form>
        </Navbar>
        <br />
    </>
  );
}

export default NavSearch;