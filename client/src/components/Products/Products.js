import React from "react";
import "../../css/Products/Products.css";
function Products(props) {
  return (
    <div className="product-wrapper">
      {props.products.map((p) => (
        <div className="product-item" key={p.id}>
          <img src={p.imageUrl} alt={p.title}></img>
          <div className="product-desc">
            <p> {p.title}</p>
            <span>{p.price}</span>
          </div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
