import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import QueueList from "../../components/QueueList/QueueList";
const QueuePage = (props) => (
  <div className="QueuePage">
    <QueueList queue={props.queue} />
  </div>
);

export default QueuePage;
