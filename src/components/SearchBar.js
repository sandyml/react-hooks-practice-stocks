import React from "react";

function SearchBar({ setSortMyStocks, setFilteredStock }) {

  const handleSortStock = (e) => {
    setSortMyStocks(e.target.value);
  }

  const handleFilterStock = (e) => {
    setFilteredStock(e.target.value);
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input onChange={handleSortStock}
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
        />
        Alphabetically
      </label>
      <label>
        <input onChange={handleSortStock}
          type="radio"
          value="Price"
          name="sort"
          checked={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterStock}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
