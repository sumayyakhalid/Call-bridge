import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const mongodbOptions = {
  serverSelectionTimeoutMS: 5000,
  autoIndex: true,
  maxPoolSize: 1000,
};

export const connectMongoDB = () => {
  mongoose.connect(process.env.MONGO_URI, mongodbOptions);
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "[❌ database] Connection error"));
  db.once("open", async function () {
    console.log("[🔌 database] Connected");
    try {
    } catch (error) {
      console.error("[🌱 seeding] Error", error);
    }
  });
};
