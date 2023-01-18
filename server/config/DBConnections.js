const mongoose = require("mongoose");

//const connectionString = "mongodb://127.0.0.1:27017/";
const connectionString =
  "mongodb+srv://admin:admin@cluster0.hzw5x.mongodb.net/?retryWrites=true&w=majority";
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(connectionString).then(console.log("Connected to DB"));
} catch (e) {
  console.log("database connection error: \n" + e.message);
}
