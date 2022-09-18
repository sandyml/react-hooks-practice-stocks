import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myPortfolio, onClickHandler }) {

  const renderPortfolio =
    myPortfolio.map((stock) => (
      <Stock
      onClickHandler={onClickHandler}
        stock={stock}
        key={stock.id}
      />
    ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;
