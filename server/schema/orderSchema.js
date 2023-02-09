const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    products: [
      {
        _id: { type: String },
        desc: { type: String },
        qty: { type: Number },
        title: { type: String },
      },
    ],

    subTotal: { type: Number },
    total: { type: Number },

    shipping: {
      address: { type: String },
      // street: String,
      // city: String,
      // buildingNo: String,
      // state: String,
      // country: String,
    },
    deliveryStatus: {
      type: String,
      enum: ["pending", "done", "rejected"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "cash on deliver"],
      default: "cash on deliver",
    },
  },
  { timestamps: true }
);

module.exports = orderSchema;
