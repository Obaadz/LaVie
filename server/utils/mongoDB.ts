import mongoose from "mongoose";

export default class MongoDB {
  static DB_URI = process.env.DB_URI;

  static async connect() {
    if (!MongoDB.DB_URI) throw new Error("DB_URI environment variable not found...");

    if (!MongoDB.isAlreadyConnected()) await mongoose.connect(MongoDB.DB_URI);
  }

  static async disconnect() {
    if (MongoDB.isAlreadyConnected()) await mongoose.disconnect();
  }

  private static isAlreadyConnected() {
    return mongoose.connection.readyState === 1 ? true : false;
  }
}
