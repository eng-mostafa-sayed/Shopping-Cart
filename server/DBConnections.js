const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/";
try {
  mongoose.connect(connectionString).then(console.log("Connected to DB"));
} catch (e) {
  console.log("database connection error: \n" + e.message);
}
