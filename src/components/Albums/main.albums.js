//children component
import React from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.album";

const Albums = (props) => {
  
  const { title, description } = props;
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1>{title}</h1>
        <p>{description}</p>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
