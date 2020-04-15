import React from "react";
import { Link } from "react-router-dom";

import styles from "./CreateDrink.module.css";

const CreateDrink = (props) => (
  <Link to="/drink" className="NavBar-link" onClick={props.handleNewDrinkClick}>
    Create Drink
  </Link>
);

export default CreateDrink;
