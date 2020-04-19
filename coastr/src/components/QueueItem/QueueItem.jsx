import React from "react";
import Button from "react-bootstrap/Button";
import "./QueueItem.css";

const QueueItem = (props) => {
  console.log("PROPS.USER", props.user);
  let liqueur = props.drink.liqueur ? (
    <div>
      {props.drink.liqueurquantity} | {props.drink.liqueur}
    </div>
  ) : (
    <div> No Liqueur </div>
  );

  let spirit = props.drink.spirit ? (
    <div>
      {props.drink.spiritquantity} | {props.drink.spirit}
    </div>
  ) : (
    <div> No Spirit </div>
  );

  let mixer = props.drink.mixer ? (
    <div>
      {props.drink.mixerquantity} | {props.drink.mixer}
    </div>
  ) : (
    <div> No Mixer </div>
  );
  let logged = props.user ? (
    <div>
      <Button
        variant="warning"
        onClick={() => props.handleDeleteDrink(props.drink._id)}
      >
        Remove From Queue
      </Button>{" "}
    </div>
  ) : (
    <input type="hidden" />
  );

  let cocktail = props.drink.cocktail ? (
    <div>{props.drink.cocktail}</div>
  ) : (
    <div>
      <div>{spirit}</div>
      <div>{mixer}</div>
      <div>{liqueur}</div>
    </div>
  );

  return (
    <div className="drink-item">
      <div>{cocktail}</div>
      <div>{logged}</div>
    </div>
  );
};

export default QueueItem;
