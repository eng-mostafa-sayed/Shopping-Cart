import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip";
function Filter(props) {
  return (
    <Flip left>
      <div className="filter-wrapper">
        <h2 className="filter-title"> Filter </h2>
        <div className="no-of-products">
          number of products {props.productsNumber}
        </div>
        <div className="filter-by-size">
          <span>Filter</span>
          <select
            className="filter-size-select"
            onChange={props.handelFilterBySize}
            value={props.size}
          >
            <option value="All">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="filter-by-sort">
          <span>Order</span>
          <select
            className="filter-sort-select"
            onChange={props.handelFilterBySort}
            value={props.sort}
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
    </Flip>
  );
}

export default Filter;
