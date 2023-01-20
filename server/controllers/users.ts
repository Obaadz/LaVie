import type { NextApiRequest, NextApiResponse } from "next";
import type { MongooseError } from "mongoose";
import type { User } from "../../types/users/User";
import type { ResponsePostBody } from "../../types/users/ResponseBody";
import mySchemas from "../models/Schemas";
import { MongoDB } from "../utils";
import jwt from "jsonwebtoken";

export async function addUserToDB(
  request: NextApiRequest,
  response: NextApiResponse<ResponsePostBody>
) {
  try {
    if (!process.env.SECRET) {
      console.log("No secret key defined");

      throw new Error("Server error");
    }

    const user: User = request.body;

    if (!(user.email && user.first_name && user.last_name && user.password))
      throw new Error("Please fill authentication fields...");

    await MongoDB.connect().catch((err) => {
      console.log(err);
      throw new Error(err.message);
    });

    const newUser = new mySchemas.Users({ ...user });

    await newUser.save().catch((err: MongooseError) => {
      if (err.message.search("duplicate"))
        throw new Error("User already registered with this email");

      throw new Error(err.message);
    });

    const token = jwt.sign({ email: user.email }, process.env.SECRET, {
      expiresIn: "6h",
    });

    const responseBody: ResponsePostBody = {
      message: "User has been created",
      isSuccess: true,
      token,
    };

    response.status(201).send(responseBody);
  } catch (err: any) {
    const responseBody: ResponsePostBody = {
      message: err.message,
      isSuccess: false,
    };

    response.status(409).send(responseBody);
  } finally {
    await MongoDB.disconnect();
  }
}
