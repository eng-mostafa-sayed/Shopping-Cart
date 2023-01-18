const mongoose = require("mongoose");

const localConnectionString = "mongodb://127.0.0.1:27017/";

try {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI || localConnectionString)
    .then(console.log("Connected to DB"));
} catch (e) {
  console.log("database connection error: \n" + e.message);
}
