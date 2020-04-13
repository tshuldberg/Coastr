import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import userService from "../../utils/userService";
// import tokenService from "../../utils/tokenService";
import HomePage from "../../pages/HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

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
        <header className="App-header">Coastr</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage handleLogout={this.handleLogout} />}
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
        <p>Stuff</p>
      </div>
    );
  }
}

export default App;
