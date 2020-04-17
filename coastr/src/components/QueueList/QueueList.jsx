import React from "react";
import QueueItem from "../QueueItem/QueueItem";

const QueueList = (props) => {
  return (
    <div className="QueueList">
      {props.drinks.map((item) => (
        <QueueItem item={item} handleDeleteDrink={props.handleDeleteDrink} />
      ))}
    </div>
  );
};

export default QueueList;
