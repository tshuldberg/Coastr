import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./CreateDrinkPage.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const CreateDrinkPage = (props) => {
  let toAdd = props.selectedCocktail[0] ? (
    <Button
      variant="outline-warning"
      onClick={() => props.handleAddDrink(props.selectedCocktail)}
    >
      Pour That Shit Bartender
    </Button>
  ) : (
    <Button
      variant="outline-warning"
      onClick={() => props.handleAddDrink(props.createdDrink)}
    >
      Pour That Shit Bartender
    </Button>
  );
  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />

      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Cocktail List
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.cocktails.map((item) => (
              <Dropdown.Item
                onClick={() => props.handleCocktailSelect(item.title)}
              >
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>{" "}
      </div>
      <div>Make Your Own</div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Spirits
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.spirits.map((item) => (
              <Dropdown.Item
                onClick={() => props.handleCreateSelect(item.title)}
              >
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>{" "}
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Mixers
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.mixers.map((item) => (
              <Dropdown.Item
                onClick={() => props.handleCreateSelect(item.title)}
              >
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>{" "}
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Liqueurs
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.liqueurs.map((item) => (
              <Dropdown.Item
                onClick={() => props.handleCreateSelect(item.title)}
              >
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>{" "}
      </div>
      <div>
        YOUR CURRENT DRINK
        <div>
          {props.createdDrink.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div>{props.selectedCocktail}</div>
      </div>
      <div>{toAdd}</div>
    </div>
  );
};

export default CreateDrinkPage;
