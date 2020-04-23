import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./CreateDrinkPage.css";

import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const CreateDrinkPage = (props) => {
  const handleSpiritSelect = (spirit) => {
    props.drinkInfo.spirit = spirit;
    console.log("Spirit", spirit);
  };

  const handleMixerSelect = (mixer) => {
    props.drinkInfo.mixer = mixer;
    console.log("Mixer", mixer);
  };

  const handleLiqueurSelect = (liqueur) => {
    props.drinkInfo.liqueur = liqueur;
    console.log("Liqueur", liqueur);
  };

  const handleCocktailSelect = (cocktail) => {
    props.drinkInfo.cocktail = cocktail;
    console.log("Cocktail", cocktail);
  };

  let toAdd = props.selectedCocktail ? (
    <Button
      className="pour"
      type="submit"
      variant="warning"
      href="/"
      // onClick={() => props.handleAddDrink(props.selectedCocktail)}
    >
      Pour That Shit Bartender
    </Button>
  ) : (
    <Button
      className="pour"
      type="submit"
      variant="warning"
      href="/"
      // onClick={() => props.handleAddDrink(props.createdDrink)}
    >
      Pour That Shit Bartender
    </Button>
  );
  if (props.user) {
    return (
      <div className="create-drink-page">
        <NavBar user={props.user} handleLogout={props.handleLogout} />

        <div className="top-drop">
          <Dropdown className="cocktail-dropdown">
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Cocktail List
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {props.cocktails.map((item, i) => (
                <Dropdown.Item
                  name="cocktail"
                  key={i}
                  onClick={(e) => handleCocktailSelect(item.title)}
                >
                  {item.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>{" "}
        </div>

        <h1 className="make-drink">Build Your Own</h1>
        <form autoComplete="off" onSubmit={props.handleSubmit}>
          <div className="build">
            <div className="build-inner">
              <div>
                <Dropdown className="create-dropdown">
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
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
                    className="quantity-bar"
                    name="spiritquantity"
                    value={props.drinkInfo.spiritquantity}
                    onChange={props.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="build">
            <div className="build-inner">
              <Dropdown className="create-dropdown">
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
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
                  className="quantity-bar"
                  name="mixerquantity"
                  value={props.drinkInfo.mixerquantity}
                  onChange={props.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="build">
            <div className="build-inner">
              <Dropdown className="create-dropdown">
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
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
                  className="quantity-bar"
                  name="liqueurquantity"
                  value={props.drinkInfo.liqueurquantity}
                  onChange={props.handleChange}
                />
                <input type="hidden" name="user" value={props.user.name} />
              </div>
            </div>
          </div>

          <div>{toAdd}</div>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Button className="pour" variant="warning" href="/">
          Please Log In
        </Button>
      </div>
    );
  }
};

export default CreateDrinkPage;
