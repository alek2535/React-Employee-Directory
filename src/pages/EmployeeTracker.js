import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import Card from "../components/Card";
import Navbar from '../components/Navbar';
import API from "../utils/API";

class EmployeeTracker extends Component {
  state = {
    employees: {},
    search: ""
  };

  componentDidMount() {
      this.getEmployees();
  }

  getEmployees = () => {
    API.employees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
      console.log(this.state.employees)
    return (
      <Container>
        <Row>
          <Col md={8}>
            <Card />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeTracker;