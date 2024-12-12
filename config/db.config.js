import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/passport", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to the database!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectDB;