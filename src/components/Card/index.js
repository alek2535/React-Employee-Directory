import React from "react";
import {
    CardGroup,
    Card,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

function EmployeeCard(props) {
  return (
    <CardGroup>
        <Card id={props.id} bg="info" border="dark" className="m-2">
            <Card.Img alt={`${props.firstName} ${props.lastName}`} src={props.image} className="p-2"/>
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
    </CardGroup>
  );
}

export default EmployeeCard;