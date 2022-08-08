import React from "react";
import Message from "./Message";
import { Link } from "react-router-dom";

function Water() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Water bottle."
      />
      <Message>
        <h1>Stay Hydrated</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Water;
