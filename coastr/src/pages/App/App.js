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

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      listOpen: false,
      cocktail: [
        {
          id: 0,
          title: "New York",
          selected: false,
          key: "cocktail",
        },
        {
          id: 1,
          title: "Dublin",
          selected: false,
          key: "cocktail",
        },
        {
          id: 2,
          title: "California",
          selected: false,
          key: "cocktail",
        },
        {
          id: 3,
          title: "Istanbul",
          selected: false,
          key: "cocktail",
        },
        {
          id: 4,
          title: "Izmir",
          selected: false,
          key: "cocktail",
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
          key: "cocktail",
        },
      ],
    };
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  handleNewDrinkClick = () => {};

  handleQueueClick = () => {};

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
              />
            )}
          />
          <Route
            exact
            path="/drink"
            render={() => (
              <CreateDrinkPage
                listOpen={this.state.listOpen}
                cocktail={this.state.cocktail}
                toggleList={this.toggleList}
              />
            )}
          />
          <Route exact path="/queue" render={() => <QueuePage />} />

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
