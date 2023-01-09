import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const handelFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === "All") {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      console.log(newProducts);
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

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            handelFilterBySize={handelFilterBySize}
            handelFilterBySort={handelFilterBySort}
            size={size}
            sort={sort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
