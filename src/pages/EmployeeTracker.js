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

  getEmployees = () => {
    API.search()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
      console.log(employees)
    return (
      <Container>
        <Navbar />
        <Row>
          <Col md={8}>
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeTracker;