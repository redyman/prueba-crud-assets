const mongoose = require("mongoose");
const { MONGODB_URI } = require("./variable.js");
(async () => {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
  
  mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
  });
  
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
  });
})();