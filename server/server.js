const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("env");
require("./DBConnections");
const router = require("./routes/routes");

const app = express();
//middleware
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use("/", router);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//
