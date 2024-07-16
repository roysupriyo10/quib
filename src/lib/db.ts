import mongoose from "mongoose";

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

if (!DB_CONNECTION_STRING) {
  throw new Error(
    "DB_CONNECTION_STRING must be provided. MongoDB connection failed",
  );
}

let cached = global[`mongoose`];

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(DB_CONNECTION_STRING as string, opts)
      .then((mongoose) => {
        console.log("connection to db is successful");

        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;

    throw error;
  }

  return cached.conn;
}
