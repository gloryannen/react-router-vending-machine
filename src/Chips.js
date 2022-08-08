import React from "react";
import Message from "./Message";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1576642589592-7d9778a1c9e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmFyaWV0eSUyMGNoaXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="Bag of chips opened."
      />
      <Message>
        <h1>Crunch crunch crunch!</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Chips;
