import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import CreateDrink from "../../components/CreateDrink/CreateDrink";
import Queue from "../../components/Queue/Queue";
import "./HomePage.css";

const HomePage = (props) => {
  console.log(props.user);
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      HOME PAGE
    </div>
  );
};

export default HomePage;
