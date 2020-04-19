import React from "react";
import Button from "react-bootstrap/Button";
import "./QueueItem.css";

const QueueItem = (props) => {
  let cocktail = props.drink.cocktail ? (
    <div>{props.drink.cocktail}</div>
  ) : (
    <input type="hidden" />
  );

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
  let logged =
    props.user && props.user.email ? (
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

  return (
    <div className="drink-item">
      <h3 className="drink-title"> 's Drink Ingredients: </h3>
      <div>{cocktail}</div>
      <div>{spirit}</div>
      <div>{mixer}</div>
      <div>{liqueur}</div>
      <div>{logged}</div>
    </div>
  );
};

export default QueueItem;
