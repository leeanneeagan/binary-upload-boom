const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Optional: turn off strictQuery warnings (Mongoose 7 default = false)
    mongoose.set("strictQuery", false);

    const conn = await mongoose.connect(process.env.DB_STRING);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
