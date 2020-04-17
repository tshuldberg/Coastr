import React from "react";
import Button from "react-bootstrap/Button";

const QueueItem = (props) => (
  <div>
    <div>{props.item}</div>
    <div>
      <Button
        variant="outline-warning"
        onClick={() => props.handleDeleteDrink(props.item._id)}
      >
        Remove From Queue
      </Button>{" "}
    </div>
  </div>
);

export default QueueItem;
