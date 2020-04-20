import React from "react";
import { Link, NavLink } from "react-router-dom";
import QueueItem from "../../components/QueueItem/QueueItem";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
import QueueList from "../../components/QueueList/QueueList";
const HomePage = (props) => {
  console.log(props.user);
  // let isUser = drink.user === props.user ? () : ()

  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="home-ctr">
        <div class="container">
          C O A S T R
          <div className="queue">
            <div className="QueueList">
              <div className="drink-list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
