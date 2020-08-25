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
    getEmployees,
    handleInputChange,
    handleSearchEmployee,
    handleAgeDesc,
    handleAgeAsc,
    handleSortLocation
  } = props;
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand 
              href="#home"
              onClick={getEmployees}
            >Employee-Search</Navbar.Brand>
            <Nav className="mr-auto">
            <Button 
              className="m-1"
              variant="info"
              onClick={handleAgeDesc}
            >Sort By Oldest Age</Button>
            <Button 
              className="m-1"
              variant="warning"
              onClick={handleAgeAsc}
            >Sort By Youngest Age</Button>
            <Button 
              className="m-1"
              variant="info"
              onClick={handleSortLocation}
            >Sort by Location</Button>
            </Nav>
            <Form inline>
            <FormControl
              value={search} 
              name="search"
              type="text" 
              placeholder="Search for Employee" 
              className="mr-sm-2"
              onChange={handleInputChange}
             />
             <Button 
              variant="warning"
              onClick={handleSearchEmployee}
             >Search</Button>
            </Form>
        </Navbar>
        <br />
    </>
  );
}

export default NavSearch;