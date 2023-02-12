const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.get("/api/orders", async (req, res) => {
  const order = await Order.find();
  res.send(order);
});

router.post("/api/orders", async (req, res) => {
  try {
    //const order = await new Order(req.body).save();
    const order = await new Order({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      products: req.body.products,
      subTotal: req.body.subTotal,
      total: req.body.total,
      shipping: req.body.shipping,
      deliveryStatus: req.body.deliveryStatus,
      paymentStatus: req.body.paymentStatus,
    }).save();
    res.send(order);
  } catch (err) {
    res.send(err.message);
  }
});
router.delete("/api/orders/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deletedOrder);
  } catch (err) {
    res.send(err.message);
  }
});

router.patch("/api/orders:id", async (req, res) => {
  try {
    const editOrder = await Order.findByIdAndUpdate(req.params.id, req.body);
    await editOrder.save();
    res.send(order);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
