import mongoose from "mongoose";

export default class MongoDB {
  static DB_URI = process.env.DB_URI;

  static connect() {
    if (!DB_URI) throw new Error("DB_URI environment variable not found...");

    if (!MongoDB.#isAlreadyConnected())
      mongoose.connect(MongoDB.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  }
  static async disconnect() {
    if (MongoDB.#isAlreadyConnected) await mongoose.disconnect();
  }

  static #isAlreadyConnected() {
    return mongoose.connection.readyState === 1 ? true : false;
  }
}
