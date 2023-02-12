import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar/Navbar";
import CheckoutSuccess from "./pages/Checkout-success";
import CheckoutCancel from "./pages/Checkout-cancel";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/orders" element={<Orders />} exact />
              <Route
                path="/checkout-success"
                element={<CheckoutSuccess />}
                exact
              />
              <Route
                path="/checkout-cancel"
                element={<CheckoutCancel />}
                exact
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
