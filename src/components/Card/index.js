import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

function EmployeeCard(props) {
  return (
    <Card id={props.id}>
        <Card.Img alt={`${props.firstName} ${props.lastName}`} src={props.image} />
        <Card.Body className="content">
            <ListGroup>
            <ListGroupItem>
                <strong>Name:</strong> {`${props.firstName} ${props.lastName}`}
            </ListGroupItem>
            <ListGroupItem>
                <strong>Age:</strong> {props.age}
            </ListGroupItem>
            <ListGroupItem>
                <strong>Location:</strong> {`${props.city}, ${props.country}`}
            </ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card>
  );
}

export default EmployeeCard;