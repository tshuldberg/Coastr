import React from "react";
import QueueItem from "../QueueItem/QueueItem";
import "./QueueList.css";

const QueueList = (props) => {
  const tempUser = props.drinks[5];
  console.log(tempUser);
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
