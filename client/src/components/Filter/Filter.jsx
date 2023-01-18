import React from "react";
import "../../css/Filter/Filter.css";
import Flip from "react-reveal/Flip";
import { connect } from "react-redux";
import { filteredSize, filteredSort } from "../../store/actions/products";
import { words } from "../../words";
function Filter(props) {
  return (
    <Flip left>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2 className="filter-title"> {words.filterTitle} </h2>
          <div className="no-of-products">
            {words.filterNoOfProducts} {props.filterProducts.length}
          </div>
          <div className="filter-by-size">
            <span>{words.filterTitle}</span>
            <select
              className="filter-size-select"
              onChange={(e) =>
                props.filteredSize(props.products, e.target.value)
              }
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
            <span>{words.filterOrder}</span>
            <select
              className="filter-sort-select"
              onChange={(e) =>
                props.filteredSort(props.products, e.target.value)
              }
              value={props.sort}
            >
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>
      )}
    </Flip>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  { filteredSize, filteredSort }
)(Filter);

//connect is a higher order function takes ()()
