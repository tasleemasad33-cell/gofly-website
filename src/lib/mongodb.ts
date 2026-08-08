import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://Asad:Asad5762@cluster0.6qit5ng.mongodb.net/?appName=Cluster0";

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return mongoose;

  try {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
    isConnected = true;
    console.log("MongoDB connected");
    return mongoose;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
