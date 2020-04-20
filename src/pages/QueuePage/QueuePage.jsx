import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import QueueList from "../../components/QueueList/QueueList";

const QueuePage = (props) => (
  <div className="QueuePage">
    <NavBar user={props.user} handleLogout={props.handleLogout} />
    <div className="queue">
      <QueueList
        queue={props.queue}
        drinks={props.drinks}
        handleDeleteDrink={props.handleDeleteDrink}
        user={props.user}
      />
    </div>
  </div>
);

export default QueuePage;
