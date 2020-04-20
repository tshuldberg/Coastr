import React from "react";
import Button from "react-bootstrap/Button";
import "./QueueItem.css";

const QueueItem = (props) => {
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
  if (props.user.email === "tshuldberg999@gmail.com") {
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
  } else
    return (
      <div className="drink-item">
        <div>{cocktail}</div>
      </div>
    );
};

export default QueueItem;
