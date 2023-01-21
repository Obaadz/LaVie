import type { MongooseError } from "mongoose";
import type { User } from "../../types/users/User";
import mySchemas from "../models/Schemas";
import { MongoDB } from "../utils";

export async function addUserToDB(user: User) {
  await MongoDB.connect();

  const newUser = new mySchemas.Users({ ...user });

  await newUser.save().catch((err: MongooseError) => {
    if (err.message.search("duplicate"))
      throw new Error("User already registered with this email");

    throw new Error(err.message);
  });
}
