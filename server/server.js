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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//
