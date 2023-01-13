import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  let p = data;
  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "All") {
      setProducts(data);
    } else {
      let productsClone = [...p];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );

      setProducts(newProducts);
    }
  };
  const handelFilterBySort = (e) => {
    let order = e.target.value;
    setSort(order);
    setSort(e.target.value);
    let productsClone = [...products];
    if (order === "highest") {
      let newProducts = productsClone.sort((a, b) => b.price - a.price);
      setProducts(newProducts);
    } else if (order === "lowest") {
      let newProducts = productsClone.sort((a, b) => a.price - b.price);
      setProducts(newProducts);
    } else if (order === "latest") {
      let newProducts = productsClone.sort((a, b) => (a.id < b.id ? 1 : -1));
      setProducts(newProducts);
    }
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <Filter
            productsNumber={products.length}
            handelFilterBySize={handelFilterBySize}
            handelFilterBySort={handelFilterBySort}
            size={size}
            sort={sort}
          />
        </div>
        <Cart
          cartItems={cartItems}
          itemsLength={cartItems.length}
          removeFromCart={removeFromCart}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
