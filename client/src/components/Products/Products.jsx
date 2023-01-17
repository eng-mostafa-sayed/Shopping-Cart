import React, { useEffect, useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";
import { addToCart } from "../../store/actions/cart";

function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };
  useEffect(() => {
    props.fetchProducts();
  }, []);
  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {props.products && props.products.length
          ? props.products.map((p) => (
              <div className="product-item" key={p._id}>
                <a href={`#`} onClick={() => openModal(p)}>
                  <img src={p.imageUrl} alt={p.title} />
                </a>
                <div className="product-desc">
                  <p>{p.title}</p>
                  <span>${p.price}</span>
                </div>
                <button onClick={() => props.addToCart(p)}>
                  {" "}
                  Add To Cart{" "}
                </button>
              </div>
            ))
          : "loading.."}

        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}

export default connect(
  (state) => {
    return {
      products: state.products.filterProducts,
    };
  },
  { fetchProducts, addToCart }
)(Products);
