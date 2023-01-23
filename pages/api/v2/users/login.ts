import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../../types/users/User";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import type { ResponsePostBody } from "../../../../types/users/ResponseBody";
import { getMethodTypeOrError } from "../../../../server/utils";
import { verifyUser } from "../../../../server/controllers/users";
import jwt from "jsonwebtoken";
import RequestMethod from "../../../../server/utils/classes/RequestMethod";

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

      const user: Pick<User, "email" | "password"> = request.body;

      if (!(user.email && user.password))
        throw new Error("Please fill authentication fields...");

      await verifyUser(user);

      const token = jwt.sign({ email: user.email }, process.env.SECRET, {
        expiresIn: "6h",
      });

      response.status(201).send({ message: "User logged in", isSuccess: true, token });
    } catch (err: any) {
      response.status(401).send({ message: err.message, isSuccess: false });
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
