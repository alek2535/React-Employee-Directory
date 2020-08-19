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
    result: {},
    search: ""
  };

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeTracker;