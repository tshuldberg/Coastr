import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import QueueList from "../../components/QueueList/QueueList";

const QueuePage = (props) => (
  <div className="QueuePage">
    <NavBar user={props.user} handleLogout={props.handleLogout} />
    <QueueList
      queue={props.queue}
      drinks={props.drinks}
      handleDeleteDrink={props.handleDeleteDrink}
    />
  </div>
);

export default QueuePage;
