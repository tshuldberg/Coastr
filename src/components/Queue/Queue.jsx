import React from "react";
import { Link } from "react-router-dom";

const Queue = (props) => (
  <Link to="/queue" className="NavBar-link" onClick={props.handleQueueClick}>
    View Queue
  </Link>
);

export default Queue;
