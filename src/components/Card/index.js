import React from "react";
import {
    Card,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

function FriendCard(props) {
  return (
    <Card>
      <div className="img-container">
        <Card.Img alt={props.name} src={props.image} />
      </div>
      <Card.Body className="content">
        <ListGroup>
          <ListGroupItem>
            <strong>Name:</strong> {props.name}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Occupation:</strong> {props.occupation}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Address:</strong> {props.location}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
      <span className="remove">𝘅</span>
    </Card>
  );
}

export default FriendCard;