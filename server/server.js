require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("env");
require("./config/DBConnections");
const productRouter = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
//middleware
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());

app.use("/", productRouter);
app.use("/", orderRoutes);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("public"));
  app.get("/", (req, res) => res.sendFile(__dirname + "public/index.html"));
} else {
  app.get("/", (req, res) => res.send("API Running ...."));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//
