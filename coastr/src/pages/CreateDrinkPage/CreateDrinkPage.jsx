import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Dropdown from "../../components/Dropdown/Dropdown";
import "./CreateDrinkPage.css";

const CreateDrinkPage = (props) => {
  return (
    <div>
      <Dropdown cocktail={props.cocktail} />
    </div>
    // <div className="CreateDrinkPage">
    //   <div className="dd-wrapper">
    //     <div className="dd-header">
    //       <div className="dd-header-title">Select A Cocktail</div>
    //     </div>
    //     <ul className="dd-list">
    //       <li className="dd-list-item">drink1</li>
    //       <li className="dd-list-item">drink2</li>
    //       <li className="dd-list-item">drink3</li>
    //     </ul>
    //   </div>{" "}
    //   <div>Lets build a drink</div>
    //   <div>Base Liquor</div>
    //   <div>Mixer</div>
    //   <div>Other</div>
    // </div>
  );
};

export default CreateDrinkPage;
