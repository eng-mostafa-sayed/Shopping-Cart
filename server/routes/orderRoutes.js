const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.get("/api/orders", async (req, res) => {
  const order = await Order.find();
  res.send(order);
});

router.post("/api/orders", async (req, res) => {
  //const order = await new Order(req.body).save();
  const order = await new Order({ p }).save();
  res.send(order);
});
router.delete("/api/orders/:id", async (req, res) => {
  const deletedOrder = await Order.findByIdAndDelete(req.params.id);
  res.send(deletedOrder);
});

router.patch("/api/orders:id", async (req, res) => {
  const editOrder = await Order.findByIdAndUpdate(req.params.id, req.body);
  await editOrder.save();

  res.send(order);
});

module.exports = router;
