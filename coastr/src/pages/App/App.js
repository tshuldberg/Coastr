import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import userService from "../../utils/userService";
// import tokenService from "../../utils/tokenService";
import HomePage from "../../pages/HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import CreateDrinkPage from "../../pages/CreateDrinkPage/CreateDrinkPage";
import QueuePage from "../../pages/QueuePage/QueuePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { isTemplateExpression } from "typescript";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      selectedCocktail: "",
      queue: [],
      selectedCreateOption: "",
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
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
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

  handleCocktailSelect = (cocktail) => {
    this.setState({ selectedCocktail: cocktail });
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

  handleLogout = () => {
    userService.logout();
    this.ListeningStateChangedEvent({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {" "}
          <Link to="" className="NavBar-link">
            Coastr
          </Link>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                handleNewDrinkClick={this.handleNewDrinkClick}
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            )}
          />
          <Route
            exact
            path="/drink"
            render={() => (
              <CreateDrinkPage
                cocktails={this.state.cocktails}
                spirits={this.state.spirits}
                mixers={this.state.mixers}
                liqueurs={this.state.liqueurs}
                createdDrink={this.state.createdDrink}
                selectedCreateOption={this.state.selectedCreateOption}
                selectedCocktail={this.state.selectedCocktail}
                handleCocktailSelect={this.handleCocktailSelect}
                handleCreateSelect={this.handleCreateSelect}
                handleAddToQueue={this.handleAddToQueue}
              />
            )}
          />
          <Route
            exact
            path="/queue"
            render={() => <QueuePage queue={this.state.queue} />}
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
