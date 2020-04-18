import React from "react";
import Button from "react-bootstrap/Button";

const QueueItem = (props) => (
  <div>
    <h3> {props.drink._id}'s Drinks Ingredients: </h3>
    <div>
      {props.drink.spirit} Amount: {props.drink.spiritquantity}
    </div>
    <div>
      {props.drink.mixer} Amount: {props.drink.mixerquantity}
    </div>
    <div>
      {props.drink.liqueur} Amount: {props.drink.liqueurquantity}
    </div>
    <div>
      <Button
        variant="outline-warning"
        onClick={() => props.handleDeleteDrink(props.drink._id)}
      >
        Remove From Queue
      </Button>{" "}
    </div>
  </div>
);

export default QueueItem;
