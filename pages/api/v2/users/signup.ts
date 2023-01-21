import type { NextApiRequest, NextApiResponse } from "next";
import type { IRequestMethod } from "../../../../types/RequestMethod";
import type { RequestMethodsManager } from "../../../../types/RequestMethodsManager";
import { getMethodTypeOrError } from "../../../../server/utils";
import { addUserToDB } from "../../../../server/controllers/users";

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

const POST: IRequestMethod = {
  handle: async (request, response) => {
    await addUserToDB(request, response);
  },
};

const ERROR: IRequestMethod = {
  handle: (request, response) => {
    response.status(405).send({ message: "THIS REQUEST IS NOT ALLOWED", status: 405 });
  },
};

const METHODS: RequestMethodsManager = {
  POST,
  ERROR,
};
