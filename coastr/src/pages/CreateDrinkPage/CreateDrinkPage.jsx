import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./CreateDrinkPage.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const CreateDrinkPage = (props) => {
  const handleSpiritSelect = (spirit) => {
    props.drinkInfo.spirit = spirit;
  };

  const handleMixerSelect = (mixer) => {
    props.drinkInfo.mixer = mixer;
  };

  const handleLiqueurSelect = (liqueur) => {
    props.drinkInfo.liqueur = liqueur;
  };

  const handleCocktailSelect = (cocktail) => {
    props.drinkInfo.cocktail = cocktail;
  };

  let toAdd = props.selectedCocktail ? (
    <Button
      type="submit"
      variant="outline-warning"
      onClick={() => props.handleAddDrink(props.selectedCocktail)}
    >
      Pour That Shit Bartender
    </Button>
  ) : (
    <Button
      type="submit"
      variant="outline-warning"
      onClick={() => props.handleAddDrink(props.createdDrink)}
    >
      Pour That Shit Bartender
    </Button>
  );

  return (
    <div className="create-drink-page">
      <NavBar user={props.user} handleLogout={props.handleLogout} />

      <div>
        <Dropdown className="cocktail-dropdown">
          <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
            Cocktail List
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {props.cocktails.map((item, i) => (
              <Dropdown.Item
                name="cocktail"
                key={i}
                onClick={() => handleCocktailSelect(item.title)}
              >
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>{" "}
      </div>

      <h1 className="make-drink">Make Your Own</h1>
      <form autoComplete="off" onSubmit={props.handleSubmit}>
        <div>
          <Dropdown className="spirits-dropdown">
            <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
              Spirits
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.spirits.map((item, i) => (
                <Dropdown.Item
                  name="spirit"
                  key={i}
                  value={props.drinkInfo.spirit}
                  onClick={() => handleSpiritSelect(item.title)}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>{" "}
          <div className="quantity-input">
            <label>Quantity</label>
            <input
              className="spirits-quantity"
              name="spiritquantity"
              value={props.drinkInfo.spiritquantity}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div>
          <Dropdown className="mixers-dropdown">
            <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
              Mixers
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.mixers.map((item, i) => (
                <Dropdown.Item
                  name="mixer"
                  key={i}
                  value={props.drinkInfo.mixer}
                  onClick={() => handleMixerSelect(item.title)}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>{" "}
          <div className="quantity-input">
            <label>Quantity</label>
            <input
              className="mixers-quantity"
              name="mixerquantity"
              value={props.drinkInfo.mixerquantity}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div>
          <Dropdown className="liqueurs-dropdown">
            <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
              Liqueurs
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.liqueurs.map((item, i) => (
                <Dropdown.Item
                  name="liqueur"
                  key={i}
                  value={props.drinkInfo.liqueur}
                  onClick={() => handleLiqueurSelect(item.title)}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>{" "}
          <div className="quantity-input">
            <label>Quantity</label>
            <input
              className="liqueurs-quantity"
              name="liqueurquantity"
              value={props.drinkInfo.liqueurquantity}
              onChange={props.handleChange}
            />
            <input type="hidden" name="user" value={props.user.name} />
          </div>
        </div>

        <div>{toAdd}</div>
      </form>
    </div>
  );
};

export default CreateDrinkPage;
