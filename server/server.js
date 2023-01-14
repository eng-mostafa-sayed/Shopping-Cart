const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// const connectionString =
//   "mongodb+srv://admin:admin@cluster0.hzw5x.mongodb.net/?retryWrites=true&w=majority";
const connectionString = "mongodb://127.0.0.1:27017/";
try {
  mongoose.connect(connectionString).then(console.log("Connected to DB"));
} catch (e) {
  console.log("database connection error: \n" + e.message);
}
const product = mongoose.model(
  "product",
  new mongoose.Schema({
    id: String,
    title: String,
    imageUrl: String,
    desc: String,
    price: Number,
    sizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await product.find();
  res.send(products);
});
app.post("/api/products", async (req, res) => {
  const newProduct = new product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
});
app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});
app.listen(5001, () => {
  console.log(`http://localhost:${5001}`);
});
