import React from "react";
import QueueItem from "../QueueItem/QueueItem";

const QueueList = (props) => {
  return (
    <div className="QueueList">
      {props.queue.map((item) => (
        <QueueItem item={item} />
      ))}
    </div>
  );
};

export default QueueList;
