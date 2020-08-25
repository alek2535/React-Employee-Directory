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

  handleSearchEmployee = event => {
    const { value } = event.target;
    const employeesArray = this.state.employees;
    const searchArray = employeesArray.filter(employee => employee.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      this.setState({
        employees: searchArray
      });
  };

  handleFilterFirst = () => {

  };

  handleFilterLast = () => {

  };

  handleSortLocation = () => {

  };

  render() {
      console.log(this.state.employees);

    return (
      <Container>
      <Row>
        <Col>
          <NavSearch
          search={this.search}
          handleSearchEmployee={this.handleSearchEmployee} />
        </Col>
      </Row>
        <Row>
        {this.state.employees.map(employee => (
          <Col 
          key={employee.login.username}
          md={4}
          lg={3}>
            <EmployeeCard
                id={employee.login.username}
                firstName={employee.name.first}
                lastName={employee.name.last}
                image={employee.picture.thumbnail}
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