const express = require("express");
const product = require("../models/productModel");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  try {
    const products = await product.find();
    res.send(products);
  } catch (err) {
    res.send(err.message);
  }
});
router.post("/api/products", async (req, res) => {
  try {
    const newProduct = new product(req.body);
    const saveProduct = await newProduct.save();
    res.send(saveProduct);
  } catch (err) {
    res.send(err.message);
  }
});
router.delete("/api/products/:id", async (req, res) => {
  try {
    const deletedProduct = await product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
