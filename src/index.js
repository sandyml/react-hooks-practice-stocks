import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// DELIVERABLES:    
    // Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock component.
    // Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.
    // Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.
    // Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
    // Allow a user to filter stocks based on the type of the stock.

ReactDOM.render(<App />, document.getElementById("root"));
