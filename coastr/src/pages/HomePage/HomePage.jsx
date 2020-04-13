import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import CreateDrink from "../../components/CreateDrink/CreateDrink";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <CreateDrink />
    </div>
  );
};

export default HomePage;
