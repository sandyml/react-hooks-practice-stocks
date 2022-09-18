import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onClickHandler }) {

  const renderStocks = stocks.map((stock) => (
    <Stock 
    key={stock.id}
    onClickHandler={onClickHandler} 
    stock={stock} 
    />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
