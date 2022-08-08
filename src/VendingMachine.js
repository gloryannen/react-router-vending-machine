import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

function VendingMachine() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1618506557292-ec1862b3c506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        alt="Vending machine"
      />
      <div>
        <h1>Vending Machine</h1>
      </div>
      <div className="Messages">
        <Message>
          <Link exact to="/candy">
            Candy
          </Link>
          <Link exact to="/chips">
            Chips
          </Link>
          <Link exact to="/water">
            Water
          </Link>
        </Message>
      </div>
    </>
  );
}

export default VendingMachine;
