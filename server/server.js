const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./DBConnections");
const router = require("./routes/routes");

const app = express();
//middleware
app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use("/", router);
const port = 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
//
