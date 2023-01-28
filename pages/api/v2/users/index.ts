import { ResponsePostBody } from "./../../../../types/users/ResponseBody";
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../../types/users/User";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import { getMethodTypeOrError } from "../../../../server/utils";
import RequestMethod from "../../../../server/utils/classes/RequestMethod";
import RequestMethodWithVerifyToken from "../../../../server/utils/classes/RequestMethodWithVerifyToken";

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

const POST = new RequestMethodWithVerifyToken(
  async (request, response: NextApiResponse<Partial<User> | ResponsePostBody>) => {
    try {
      const user: any = POST.verifyToken(request.body.token, true);

      if (!(user?.email || user?.first_name || user?.last_name))
        throw { message: "Token provided is invalid", statusCode: 401 };

      response.status(201).send({
        ...user,
      });
    } catch (err: any) {
      response
        .status(err.statusCode || 401)
        .send({ message: err.message, isSuccess: false });
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
