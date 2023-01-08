import React from "react";
import "./Filter.scss";
function Filter() {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> Filter </h2>
      <div className="no-of-products">number of products {4}</div>
      <div className="filter-by-size">
        <span>Filter</span>
        <select className="filter-size-select">
          <option value="All">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select className="filter-size-select">
          <option value="latest">Latest</option>
          <option value="lower">Lower</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
