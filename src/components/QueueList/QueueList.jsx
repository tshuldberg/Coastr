import React, { useEffect } from "react";
import QueueItem from "../QueueItem/QueueItem";
import "./QueueList.css";

const QueueList = (props) => {
  useEffect(() => {
    console.log("DRINKSS", props.drinks);
  }, [props.drinks]);
  return (
    <div className="QueueList">
      <h1 className="queue-title">Drink Queue</h1>
      <div className="drink-list">
        {props.drinks.map((drink) => (
          <QueueItem
            drink={drink}
            handleDeleteDrink={props.handleDeleteDrink}
            user={props.user}
          />
        ))}
      </div>
    </div>
  );
};

export default QueueList;
