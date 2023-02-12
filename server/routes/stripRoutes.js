const express = require("express");
const router = express.Router();
// calling the env file
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIP_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/checkout-cancel`,
  });

  res.send({ url: session.url });
});

module.exports = router;
