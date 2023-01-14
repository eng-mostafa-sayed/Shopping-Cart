const express = require("express");
const bodyParser = require("body-parser");
require("./DBConnections");
const router = require("./routes/routes");

const app = express();
//middleware
app.use(bodyParser.json());
app.use("/", router);

const port = 5001;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//
