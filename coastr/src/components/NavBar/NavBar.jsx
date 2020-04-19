import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./NavBar.css";

const NavBar = (props) => {
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
          <div className="topnav-right">
            <Link
              style={{ textDecoration: "none" }}
              to=""
              className="NavBar-link"
              onClick={props.handleLogout}
            >
              Log Out
            </Link>
            &nbsp;&nbsp;&nbsp;
            <NavLink
              className="NavBar-link"
              style={{ textDecoration: "none" }}
              exact
              to="/queue"
            >
              {" "}
              View Queue
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink
              className="NavBar-link"
              style={{ textDecoration: "none" }}
              exact
              to="/drink"
            >
              Add Drink
            </NavLink>
          </div>
        </header>
        &nbsp;&nbsp;&nbsp;
        <span className="NavBar-welcome">Time To Drink, {props.user.name}</span>
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

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
