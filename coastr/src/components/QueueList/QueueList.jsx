import React from "react";
import QueueItem from "../QueueItem/QueueItem";
import "./QueueList.css";

const QueueList = (props) => {
  return (
    <div className="QueueList">
      <h1>Drink Queue</h1>
      {props.drinks.map((drink) => (
        <QueueItem drink={drink} handleDeleteDrink={props.handleDeleteDrink} />
      ))}
    </div>
  );
};

export default QueueList;
