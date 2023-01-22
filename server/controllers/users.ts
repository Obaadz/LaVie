import type { MongooseError } from "mongoose";
import type { User, IUserDocument } from "../../types/users/User";
import mySchemas from "../models/Schemas";
import { MongoDB } from "../utils";

export async function addUserToDB(user: User) {
  try {
    await MongoDB.connect();

    const newUser = new mySchemas.Users({ ...user });

    await newUser.save().catch((err: MongooseError) => {
      if (err.message.search("duplicate"))
        throw new Error("User already registered with this email");

      throw new Error(err.message);
    });

    return true;
  } finally {
    await MongoDB.disconnect();
  }
}

export async function verifyUser(user: Pick<User, "email" | "password">) {
  try {
    await MongoDB.connect();

    const dbUser: IUserDocument | null = await mySchemas.Users.findOne({
      email: user.email,
    });

    if (!dbUser) throw new Error("User not found");

    if (!(dbUser.email === user.email && dbUser.password === user.password))
      throw new Error("Invalid email or password");

    return true;
  } finally {
    await MongoDB.disconnect();
  }
}
