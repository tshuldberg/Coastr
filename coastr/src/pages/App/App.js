import React, { Component } from "react";
import "./App.css";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import userService from "../../utils/userService";
import drinkService from "../../utils/drinkService";

// import tokenService from "../../utils/tokenService";
import HomePage from "../../pages/HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import CreateDrinkPage from "../../pages/CreateDrinkPage/CreateDrinkPage";
import QueuePage from "../../pages/QueuePage/QueuePage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      drinkInfo: {
        cocktail: "",
        spirit: "",
        spiritquantity: "",
        mixer: "",
        mixerquantity: "",
        liqueur: "",
        liqueurquantity: "",
        user: "",
      },
      selectedCocktail: [],
      queue: [],
      selectedCreateOption: "",
      drinks: [],
      createdDrink: [],
      cocktails: [
        {
          id: 0,
          title: "Death in the Afternoon",
          selected: false,
          key: "cocktail",
        },
        {
          id: 1,
          title: "Whiskey Sour",
          selected: false,
          key: "cocktail",
        },
        {
          id: 2,
          title: "Old Fashioned",
          selected: false,
          key: "cocktail",
        },
        {
          id: 3,
          title: "Cosmopolitan",
          selected: false,
          key: "cocktail",
        },
        {
          id: 4,
          title: "Appletini",
          selected: false,
          key: "cocktail",
        },
        {
          id: 5,
          title: "Vodka Soda",
          selected: false,
          key: "cocktail",
        },
      ],
      spirits: [
        {
          id: 0,
          title: "Absinthe",
          selected: false,
          key: "spirits",
        },
        {
          id: 1,
          title: "Brandy and Cognac",
          selected: false,
          key: "spirits",
        },
        {
          id: 2,
          title: "Cachaca",
          selected: false,
          key: "spirits",
        },
        {
          id: 3,
          title: "Calvados",
          selected: false,
          key: "spirits",
        },
        {
          id: 4,
          title: "Gin",
          selected: false,
          key: "spirits",
        },
        {
          id: 5,
          title: "Whisky",
          selected: false,
          key: "spirits",
        },
        {
          id: 6,
          title: "Rum",
          selected: false,
          key: "spirits",
        },
        {
          id: 7,
          title: "Tequila and Mezcal",
          selected: false,
          key: "spirits",
        },
        {
          id: 8,
          title: "Vodka",
          selected: false,
          key: "spirits",
        },
      ],
      mixers: [
        {
          id: 0,
          title: "Bitters",
          selected: false,
          key: "mixers",
        },
        {
          id: 1,
          title: "Grenadine",
          selected: false,
          key: "mixers",
        },
        {
          id: 2,
          title: "Margarita Mix",
          selected: false,
          key: "mixers",
        },
        {
          id: 3,
          title: "Sour Mix",
          selected: false,
          key: "mixers",
        },
        {
          id: 4,
          title: "Sugar Syrup",
          selected: false,
          key: "mixers",
        },
        {
          id: 5,
          title: "Cranberry",
          selected: false,
          key: "mixers",
        },
        {
          id: 6,
          title: "Grapefruit",
          selected: false,
          key: "mixers",
        },
        {
          id: 7,
          title: "Lemon",
          selected: false,
          key: "mixers",
        },
        {
          id: 8,
          title: "Mango",
          selected: false,
          key: "mixers",
        },
        {
          id: 9,
          title: "Lime",
          selected: false,
          key: "mixers",
        },
        {
          id: 10,
          title: "Orange",
          selected: false,
          key: "mixers",
        },
        {
          id: 11,
          title: "Pineapple",
          selected: false,
          key: "mixers",
        },
      ],
      liqueurs: [
        {
          id: 0,
          title: "Chocolate",
          selected: false,
          key: "liqueur",
        },
        {
          id: 1,
          title: "Coffee",
          selected: false,
          key: "liqueur",
        },
        {
          id: 2,
          title: "Cream",
          selected: false,
          key: "liqueur",
        },
        {
          id: 3,
          title: "Fruit",
          selected: false,
          key: "liqueur",
        },
        {
          id: 4,
          title: "Herb",
          selected: false,
          key: "liqueur",
        },
        {
          id: 5,
          title: "Nut",
          selected: false,
          key: "liqueur",
        },
      ],
    };
  }

  handleChange = (e) => {
    const drinkInfo = {
      ...this.state.drinkInfo,
      [e.target.name]: e.target.value,
    };
    this.setState({
      drinkInfo,
    });
  };

  handleNewDrinkClick = () => {};

  handleQueueClick = () => {};

  handleCreateSelect = (createOption) => {
    this.setState((state) => {
      const createdDrink = state.createdDrink.concat(createOption);
      return {
        createdDrink,
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAddDrink(this.state.drinkInfo);
  };

  handleAddToQueue = (drink) => {
    this.setState((state) => {
      const queue = state.queue.concat(drink);
      console.log(queue);
      return {
        queue,
      };
    });
  };

  handleAddDrink = async (drinkIngredients) => {
    console.log(`DRINK WILL BE ${drinkIngredients}`);
    drinkIngredients.user = userService.getUser();
    const newDrink = await drinkService.create(drinkIngredients);
    this.setState((state) => ({
      drinks: [...state.drinks, newDrink],
    }));
  };

  handleDeleteDrink = async (id) => {
    await drinkService.delete(id);
    this.setState((state) => ({
      drinks: state.drinks.filter((d) => d._id !== id),
    }));
  };

  handleCocktailSelect = (e) => {
    const drinkInfo = {
      ...this.state.drinkInfo,
      [e.target.name]: e.target.value,
    };
    this.setState({
      drinkInfo,
    });
  };

  componentDidMount = async () => {
    const drinks = await drinkService.getAll();
    console.log(drinks);
    this.setState({
      drinks: drinks,
    });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleNewDrinkClick={this.handleNewDrinkClick}
                handleLogout={this.handleLogout}
                drinks={this.state.drinks}
                user={this.state.user}
                handleDeleteDrink={this.handleDeleteDrink}
              />
            )}
          />
          <Route
            exact
            path="/drink"
            render={() => (
              <CreateDrinkPage
                handleAddDrink={this.handleAddDrink}
                user={this.state.user}
                createdDrink={this.state.createdDrink}
                drinkInfo={this.state.drinkInfo}
                handleCocktailSelect={this.handleCocktailSelect}
                handleCreateSelect={this.handleCreateSelect}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                cocktails={this.state.cocktails}
                liqueurs={this.state.liqueurs}
                mixers={this.state.mixers}
                spirits={this.state.spirits}
              />
            )}
          />
          <Route
            exact
            path="/queue"
            render={() => (
              <QueuePage
                queue={this.state.queue}
                drinks={this.state.drinks}
                handleDeleteDrink={this.handleDeleteDrink}
                handleNewDrinkClick={this.handleNewDrinkClick}
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
