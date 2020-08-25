import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import EmployeeCard from "../components/Card";
import NavSearch from '../components/Navbar';
import API from "../utils/API";

class EmployeeTracker extends Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
    sortedEmployees: []
  };

  componentDidMount() {
      this.getEmployees();
  }

  getEmployees = () => {
    API.employees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
     const { value, name } = event.target;
     this.setState({
       [name]: value
     })
  }

  handleSearchEmployee = () => {
    const employeesArray = this.state.employees;
    const searchArray = employeesArray.filter(employee => employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || employee.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    
    this.setState({
      employees: searchArray
    });
    this.setState({
      search: ''
    })
  };

  handleAgeDesc = () => {
    const employeesArray = this.state.employees;
    const ageDescArray = employeesArray.sort((a,b) => {
      return b.dob.age - a.dob.age;
    });
    this.setState({
      employees: ageDescArray
    })
  };

  handleAgeAsc = () => {
    const employeesArray = this.state.employees;
    const ageAscArray = employeesArray.sort((a,b) => {
      return a.dob.age - b.dob.age;
    });
    this.setState({
      employees: ageAscArray
    })
  };

  handleSortLocation = () => {
    const employeesArray = this.state.employees;
    const countryArray = employeesArray.sort((a,b) => {
      const countryA = a.location.country.toLowerCase();
      const countryB = b.location.country.toLowerCase();
      if (countryA < countryB) {
        return -1;
      };
    });
    this.setState({
      employees: countryArray
    })
  };

  render() {
      console.log(this.state.employees);

    return (
      <Container>
        <Row>
          <Col>
            <NavSearch
            search={this.search}
            getEmployees={this.getEmployees}
            handleInputChange={this.handleInputChange}
            handleSearchEmployee={this.handleSearchEmployee} 
            handleAgeDesc={this.handleAgeDesc}
            handleAgeAsc={this.handleAgeAsc}
            handleSortLocation={this.handleSortLocation}
            />
          </Col>
        </Row>
        <Row>
          {this.state.employees.map(employee => (
            <Col 
             key={employee.login.username}
             md={5}
             lg={4}
            >
              <EmployeeCard
                id={employee.login.username}
                firstName={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.medium}
                age={employee.dob.age}
                city={employee.location.city}
                country={employee.location.country}
              />
            </Col>
          ))}   
        </Row>
      </Container>
    );
  }
}

export default EmployeeTracker;