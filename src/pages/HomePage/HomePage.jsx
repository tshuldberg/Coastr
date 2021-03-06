import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";
const HomePage = (props) => {
  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <div className="home-ctr">
        <div className="container">
          C O A S T R
          <div className="queue">
            <div className="QueueList">
              <div className="drink-list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
