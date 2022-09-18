import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
// import { es } from "date-fns/locale";
// import e from "express";
// import Stock from "./Stock";

// NOTED: Keep useState and useEffect in Container that has the most child, can do App but MainContainer is better 

const stockURL = "http://localhost:3001/stocks";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([]);
  const [sortMyStocks, setSortMyStocks] = useState(null); // falseys? undefined? 
  const [filteredStock, setFilteredStock] = useState("All");

  useEffect(() => {
    fetch(stockURL)
      .then(resp => resp.json())
      .then(setStocks);
  }, [])

  const buyStock = (stock) => {
    setMyPortfolio((prevState) => {
      const portfolioCard = prevState.includes(stock);
      if(portfolioCard) {
        return prevState;
      } else {
        return [stock, ...prevState]; // show new stock first 
      }
    });
  }

  // define st as stock but st for short to make it less confusing and utilize too much stocks 
  const sellStock = (stock) => {
    setMyPortfolio((prevState) =>
      prevState.filter((st) => st.id !== stock.id)
    );
  }
  //console.log("sellStocks function")

  const sortStocks = (stocks) => {
    if (sortMyStocks === "Price") {
      return stocks.sort((a, b) => b.price - a.price);
    } else if (sortMyStocks === "Alphabetically") {
      return stocks.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return stocks;
    }
  }

  const filterStocks = (stocks) => {
    if (filteredStock === "All") {
      return stocks;
    } else {
      return stocks.filter((stock) => stock.type === filteredStock);
    }
  }

  const sortAndFilterStocks = () => {
    const organizedStocks = sortStocks(stocks);
    return filterStocks(organizedStocks);
  }

  return (
    <div>
      {/* {console.log("MainContainer, testing will this work?")} */}
      <SearchBar 
        setSortMyStocks={setSortMyStocks} 
        setFilteredStock={setFilteredStock} 
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            key={stocks.id}
            stocks={sortAndFilterStocks()}
            onClickHandler={buyStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          key={myPortfolio.id}
          myPortfolio={myPortfolio} 
          onClickHandler={sellStock} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
