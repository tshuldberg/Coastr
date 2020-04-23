import React from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./QueueItem.css";

const QueueItem = (props) => {
  console.log(props.drink);
  if (typeof props.drink !== "undefined") {
    let spirit = props.drink.spirit ? (
      <div>
        {props.drink.spiritquantity} | {props.drink.spirit}
      </div>
    ) : (
      <div> No Spirit </div>
    );

    let liqueur = props.drink.liqueur ? (
      <div>
        {props.drink.liqueurquantity} | {props.drink.liqueur}
      </div>
    ) : (
      <div> No Liqueur </div>
    );

    let mixer = props.drink.mixer ? (
      <div>
        {props.drink.mixerquantity} | {props.drink.mixer}
      </div>
    ) : (
      <div> No Mixer </div>
    );

    let cocktail = props.drink.cocktail ? (
      <div>
        {props.drink.user[0].name}
        <div>{props.drink.cocktail}</div>
      </div>
    ) : (
      <div>
        {" "}
        {props.drink.user[0].name}
        <div>{spirit}</div>
        <div>{mixer}</div>
        <div>{liqueur}</div>
      </div>
    );

    let logged = (
      <div>
        <Button
          variant="warning"
          onClick={() => props.handleDeleteDrink(props.drink._id)}
        >
          Remove From Queue
        </Button>{" "}
      </div>
    );
    if (!props.user) {
      return <Redirect to="/login" />;
    } else if (props.user.email === "tshuldberg999@gmail.com") {
      return (
        <div className="drink-item">
          <div>{cocktail}</div>
          <div>{logged}</div>
        </div>
      );
    } else if (props.user) {
      let logged =
        props.user._id === props.drink.user[0]._id ? (
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
          <div>{cocktail}</div>
          <div>{logged}</div>
        </div>
      );
    } else {
      return (
        <div className="drink-item">
          <div>{cocktail}</div>
        </div>
      );
    }
  } else {
    console.log(props.drink);

    return <Redirect to="/" />;
  }
};

export default QueueItem;
