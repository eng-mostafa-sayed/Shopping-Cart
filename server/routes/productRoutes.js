const express = require("express");
const product = require("../models/productModel");
const router = express.Router();

router.get("/api/products", async (req, res) => {
  const products = await product.find();
  console.log("fetched");
  res.send(products);
});
router.post("/api/products", async (req, res) => {
  const newProduct = new product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});
router.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

module.exports = router;