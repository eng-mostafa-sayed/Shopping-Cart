const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    products: [{ id: String, quantity: Number }],
    subTotal: Number,
    total: Number,

    shipping: {
      address: {
        street: String,
        city: String,
        buildingNo: String,
        state: String,
        country: String,
      },
      email: String,
      name: String,
      phone: String,
    },
    deliveryStatus: ["pending", "done", "rejected"],
    paymentStatus: ["paid", "cash on deliver"],
  },
  { timestamps: true }
);

module.exports = orderSchema;
