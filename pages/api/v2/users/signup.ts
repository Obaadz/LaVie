import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../../types/users/User";
import type { ResponsePostBody } from "../../../../types/users/ResponseBody";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import { getMethodTypeOrError } from "../../../../server/utils";
import { addUserToDB } from "../../../../server/controllers/users";
import RequestMethod from "../../../../server/utils/classes/RequestMethod";
import jwt from "jsonwebtoken";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const methodType: string = getMethodTypeOrError(request.method);

  try {
    await METHODS[methodType].handle(request, response);
  } catch (err) {
    await METHODS["ERROR"].handle(request, response);
  }

  response.end();
}

const POST = new RequestMethod(
  async (request, response: NextApiResponse<ResponsePostBody>) => {
    try {
      if (!process.env.SECRET) {
        console.log("No secret key defined");

        throw new Error("Server error");
      }

      const user: User = request.body;

      if (!(user.email && user.first_name && user.last_name && user.password))
        throw new Error("Please fill authentication fields...");

      const token = jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: "6h",
      });

      await addUserToDB(user);

      response
        .status(201)
        .send({ message: "User registered successfully", isSuccess: true, token });
    } catch (err: any) {
      response.status(409).send({
        message: err.message,
        isSuccess: false,
      });
    }
  }
);

const ERROR = new RequestMethod((request, response) => {
  response.status(405).send({ message: "THIS REQUEST IS NOT ALLOWED", status: 405 });
});

const METHODS: RequestMethodsManager = {
  POST,
  ERROR,
};
