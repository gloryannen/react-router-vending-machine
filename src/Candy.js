import React from "react";
import Message from "./Message";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmR5JTIwdmVuZGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Candy lollipops of multiple colors."
      />
      <Message>
        <h1>Oooh! A piece of candy!</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Candy;
