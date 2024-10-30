import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define mongodb URI variable");
}

async function connectDB() {
  // if there's already a connection made, maintain the connection
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }
  //else run this block
  const options = {
    bufferCommands: false, // disable mongoose buffering
  };

  await mongoose.connect(MONGO_URI!, options);

  return mongoose;
}

export default connectDB;
