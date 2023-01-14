const express = require("express");
const bodyParser = require("body-parser");
require("./DBConnections");
const router = require("./routes/routes");

const app = express();
//middleware
app.use(bodyParser.json());
app.use("/", router);

app.listen(5001, () => {
  console.log(`http://localhost:${5001}`);
});
