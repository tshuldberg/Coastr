import React from "react";
import { Link, NavLink } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

const HomePage = (props) => {
  let nav =
    props.user && props.user.email ? (
      <div>
        <header className="App-header">
          {" "}
          <Link
            style={{ textDecoration: "none" }}
            to=""
            className="Coastr-link"
          >
            C
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to=""
            className="NavBar-link"
            onClick={props.handleLogout}
          >
            Log Out
          </Link>
          <NavLink
            className="NavBar-link"
            style={{ textDecoration: "none" }}
            exact
            to="/queue"
          >
            {" "}
            View Queue
          </NavLink>
          <NavLink
            className="NavBar-link"
            style={{ textDecoration: "none" }}
            exact
            to="/drink"
          >
            Add Drink
          </NavLink>
        </header>
        |&nbsp;&nbsp;&nbsp;
        <span className="NavBar-welcome">WELCOME, {props.user.name}</span>
      </div>
    ) : (
      <div>
        <header className="App-header">
          {" "}
          <Link
            style={{ textDecoration: "none" }}
            to=""
            className="Coastr-link"
          >
            Coastr
          </Link>
          <nav>
            <NavLink className="NavBar-link" exact to="/queue">
              {" "}
              View Queue
            </NavLink>
            <NavLink className="NavBar-link" exact to="/drink">
              Add Drink
            </NavLink>
          </nav>
        </header>
        <Link className="NavBar-link" to="/login" className="NavBar-link">
          LOG IN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link className="NavBar-link" to="/signup" className="NavBar-link">
          SIGN UP
        </Link>
      </div>
    );
  console.log(props.user);
  return (
    <div>
      <div>{nav}</div>
      <div className="HomePage">
        <div className="home-ctr">
          <div class="container">C O A S T R</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
